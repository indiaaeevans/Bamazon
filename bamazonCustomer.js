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
  displayItems();
});

// Display all of the items available for sale
function displayItems() {
	var query = "SELECT item_id, product_name, price, stock_quantity FROM products";
    connection.query(query, function(err, results) {
    	if (err) throw err;
    	for (var i = 0; i < results.length; i++) {
			console.log("Item ID: " + results[i].item_id + " || Name: " + results[i].product_name + " || Price: $" + results[i].price);
			// console.log("Units in stock: " + results[i].stock_quantity);
      	}
      	newOrder();
     });
}

// Prompt user with two messages about what they want to buy
function newOrder() {
	inquirer.prompt([
      { name: "id",
        type: "input",
        message: "Please enter the ID of the product you would like to purchase:"
      },
      { name: "quantity",
      	type: "input",
      	message: "Please specify how many units you would like to buy:"
      }
      ]).then(function (answers) {
      	// check if valid numbers were submitted by the user
      	if(isNaN(answers.id) || isNaN(answers.quantity)){
      		console.log("Please enter a valid ID and quantity.")
      		askUser();
      	} else {
      		// confirm what they wanted to order
      		console.log("You requested " + answers.quantity + " units of item ID " + answers.id + ".");
      		// check if your store has enough of the product to meet the customer's request.
			var query = "SELECT stock_quantity, price, product_name FROM products WHERE ?";
		    connection.query(query, { item_id: answers.id }, function(err, res) {
		    	if (err) throw err;
		    	else if (answers.quantity > res[0].stock_quantity){
		      	console.log("There is not enough in stock to fulfill the order.");
		      	return false;
		      	// if your store has enough of the product, fulfill the customer's order.
		      	} else {
			      	console.log("There is enough in stock to fulfill the order.");
			      	// Update the SQL database to reflect the remaining quantity.
			      	connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [res[0].stock_quantity - answers.quantity, answers.id], 
			      	function (error, results, fields) {
						if (error) throw error;
				  	// console.log("There are " + res[0].stock_quantity + " units remaining.");
					});
					// Once the update goes through, show the customer the total cost of their purchase.
					var totalcost = res[0].price * answers.quantity;
					console.log("For " + answers.quantity + " units of " + res[0].product_name + ":");
					console.log("Total cost: $" + totalcost);
					console.log("Your order was placed successfully!")
					orderAgain();
			    }
		    });
      	}
    });
}

function orderAgain(){
	inquirer.prompt([{ 
		name: "order",
        type: "confirm",
        message: "Would you like to place a new order?"
    }]).then(function (answers) {
    	if (answers.order){
      		displayItems();
      	} else {
      		console.log("Thanks for shopping with Bamazon.  Come back soon!");
      	}
    });
}