# Bamazon

This app features an Amazon-like storefront using MySQL.

With Customer-View, the app will take in orders from customers and deplete stock from the store's inventory accordingly.  With Manager-View, the app will allow a “manager” to view products, check on low inventory, add to inventory, and add new products.

_____________________________________________________

Customer View Demo:
_____________________________________________________

The app will first present a list of products for sale.

![image](https://cloud.githubusercontent.com/assets/22288641/25955336/fd092128-3636-11e7-92e4-ae0475597ecd.png)

Then, the customer will be prompted to select a product by ID and then specify the quantity they want to purchase.

![image](https://cloud.githubusercontent.com/assets/22288641/25955340/fd204dbc-3636-11e7-8fda-51420f09e104.png)

If the order is successful (i.e. if the store has enough in stock to fulfill the order), then they will receive a confirmation message.

![image](https://cloud.githubusercontent.com/assets/22288641/25955335/fd095d82-3636-11e7-9fb9-454dd249cc98.png)

After ordering, the customer will have the option to order again.

If they say yes, then the app will present the list of products again.  

![image](https://cloud.githubusercontent.com/assets/22288641/25955337/fd099540-3636-11e7-98f0-491aaaa2e1b1.png)

If they say no, then they will be thanked for their order.

![image](https://cloud.githubusercontent.com/assets/22288641/25955338/fd0b7996-3636-11e7-9a8f-440939d526b9.png)

_____________________________________________________

Manager View Demo:
_____________________________________________________

The app will first present a menu of options.

![image](https://cloud.githubusercontent.com/assets/22288641/25956158/faf54eaa-3638-11e7-923d-04610b487cb5.png)

The manager can view a list of all products for sale.

![image](https://cloud.githubusercontent.com/assets/22288641/25956162/fb08686e-3638-11e7-9d2c-a9f39d4544b6.png)

The manager can view items with low inventory.

![image](https://cloud.githubusercontent.com/assets/22288641/25956164/fb0b809e-3638-11e7-8178-292c230ec812.png)

If there are any items low in stock then the app will display these to the manager.

![image](https://cloud.githubusercontent.com/assets/22288641/25956156/faf060a2-3638-11e7-9b12-9a3ae75cedc3.png)

If there are no items low in stock, they will receive a message.

![image](https://cloud.githubusercontent.com/assets/22288641/25956157/faf1eb20-3638-11e7-891f-1e883c02eb3f.png)

If the manager would like to add inventory to an existing product:

![image](https://cloud.githubusercontent.com/assets/22288641/25956154/faede12e-3638-11e7-85d0-aaa3580ee16f.png)

The app will prompt them to input product ID and quantity to add.  Once added, they will receive a confirmation.

![image](https://cloud.githubusercontent.com/assets/22288641/25956163/fb0a00ca-3638-11e7-9502-1586720c9679.png)

The manager can also add new products to the store.  They will need to input the product name, department, price, and quantity.

![image](https://cloud.githubusercontent.com/assets/22288641/25956155/faef04d2-3638-11e7-8ada-3172307833e7.png)

Once added successfully, the new item will be available in the product list.

![image](https://cloud.githubusercontent.com/assets/22288641/25956165/fb0e3bae-3638-11e7-9944-f55d75074485.png)

