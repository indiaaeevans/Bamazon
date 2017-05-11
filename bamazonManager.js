var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  menu();
});

// List a set of menu options:
function menu() {
	inquirer.prompt([
      { name: "selection",
        type: "list",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
        message: "Please select an option:"
      }
      ]).then(function (answers) {
      	switch(answers.selection) {
      		// list every available item: the item IDs, names, prices, and quantities.
		    case "View Products for Sale":
		        console.log("Available items:\n________________________________________");
		        displayItems();
		        break;
		    // list all items with a inventory count lower than five.    
		    case "View Low Inventory":
		    	lowInventory();
		        break;
		    // display a prompt that will let the manager "add more" of any item currently in the store.    
		    case "Add to Inventory":
		    	addInventory();
		    	break;
		    // allow the manager to add a completely new product to the store.	
		    case "Add New Product":
		    	addProduct();
		    	break;
        default:
          console.log("Not a valid request.");
		    }
      });
}

// Display all of the items available for sale
function displayItems() {
	var query = "SELECT item_id, product_name, price, stock_quantity FROM products";
  connection.query(query, function(err, results) {
    if (err) throw err;
    for (var i = 0; i < results.length; i++) {
			console.log("Item ID: " + results[i].item_id + " || Name: " + results[i].product_name); 
			console.log("Price: $" + results[i].price + " || Units in stock: " + results[i].stock_quantity);
			console.log("________________________________________");
    }
    menu();
  });
}

// Display all of the items with low inventory (<5)
function lowInventory() {
	var query = 'SELECT item_id, product_name, stock_quantity FROM products WHERE stock_quantity < 5';
	connection.query(query, function (error, results, fields) {
  		if (error) throw error;
  		if (results.length === 0){
  			console.log("\nThere are no items with low inventory.\n")
  			menu();
  			return;
  		}
  		console.log("\nItems with < 5 units in stock:\n");
  		for (var i = 0; i < results.length; i++) {
			   console.log("Item ID: " + results[i].item_id + " || Name: " + results[i].product_name); 
			   console.log("Units in stock: " + results[i].stock_quantity + "\n");
      }
      menu();
	});
}

function addInventory() {
	inquirer.prompt([
    	{ name: "id",
        type: "input",
        message: "Please enter the ID of the product:"
      },
      { name: "quantity",
      	type: "input",
      	message: "Please specify how many units you would like to add:"
      }
      ]).then(function (answers) {
      	var id = answers.id;
      	// check if valid numbers were submitted by the user
      	if(isNaN(answers.id) || isNaN(answers.quantity)){
      		console.log("Please enter a valid ID and quantity.")
      		addInventory();
      	} else {
      		// confirm what they wanted to add
          console.log("________________________________________");
      		console.log("\nYou requested to add " + answers.quantity + " units to item ID " + answers.id + ".");
      		// retrieve the current stock quantity from table
      		var query1 = "SELECT stock_quantity FROM products WHERE item_id = ?";
    		  connection.query(query1, [id], function(err, results) {
    			 if (err) throw err;
      			// update the stock quantity in the table
      			var query2 = 'UPDATE products SET stock_quantity = ? WHERE item_id = ?'
				    connection.query(query2, [parseInt(results[0].stock_quantity) + parseInt(answers.quantity), answers.id], 
				    function (error, results, fields) {
					   if (error) throw error;
					   console.log("\nSuccesfully updated inventory!\n")
					   menu();
				    });
			     });
		    }
	   });     
}

function addProduct() {
	inquirer.prompt([
    	{ 	name: "name",
        	type: "input",
        	message: "Please enter the name of the new product:"
      	},
      	{
      		name: "department",
      		type: "input",
      		message: "Please specify which department to sell in:"
      	},
      	{ 	
          name: "quantity",
      		type: "input",
      		message: "Please specify how many units are being added:"
      	},
      	{
      		name: "price",
      		type: "input",
      		message: "Please specify the price per unit: $"
      	}
      ]).then(function (answers) {
        if(isNaN(answers.quantity || answers.price)){
      	 console.log("Please enter a valid quantity and price.")
      	 addProduct();
      	} else {
          
          var post  = {
            product_name: answers.name,
            department_name: answers.department,
            stock_quantity: answers.quantity,
            price: answers.price
          };

          connection.query('INSERT INTO products SET ?', post, function (err, result) {
            if (err) throw err;
            console.log("\nProduct was added successfully!\n");
            menu();
          });
      	}
      });
}