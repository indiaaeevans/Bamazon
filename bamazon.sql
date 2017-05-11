-- Create a MySQL Database called `Bamazon`.
CREATE database Bamazon;

-- Create a Table inside of that database called `products`.
USE Bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);

-- Populate this database a few different products
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
	("gobstopper", "candy", 2.25, 100),
	("lollipop", "candy", .87, 2000),
	("peanut butter cup", "candy", 3.00, 20),
	("bouquet of roses", "gift shop", 45.00, 10),
	("swag watch", "gift shop", 200, 28),
	("ipod", "gift shop", 120, 80),
	("case of beer", "office supplies", 10, 100),
	("gel pens", "office supplies", 3, 40),
	("keyboard", "office supplies", 5, 2000),
	("air freshener", "office supplies", 2, 39);