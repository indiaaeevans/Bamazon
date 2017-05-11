# Bamazon

This app features an Amazon-like storefront using MySQL.

With Customer-View, the app will take in orders from customers and deplete stock from the store's inventory accordingly.  With Manager-View, the app will allow a “manager” to view products, check on low inventory, add to inventory, and add new products.

Customer View Demo:

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
