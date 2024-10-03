

FoodExplorer is a full-stack application, using the technologies learned during the Explorer course, simulating a fictitious restaurant according to the layout provided in Figma. The food explorer has two personas: the admin and the user.

<a href="https://github.com/kennedysferreira/apiFoodExplorer">Link to api</a> 
<h1>Installation</h1>
### **_Prerequisites_**

Antes de começar, você vai precisar ter instalado em sua máquina <a target="_blank">[NodeJs](https://nodejs.org/en) </a>, uma ferramenta de versionamento como o <a target="_blank">[GIT](https://git-scm.com/) </a>. Além disto é recomendado um editor de código, por exemplo o<a target="_blank">[VSCode](https://code.visualstudio.com/) </a>.
### **_Configuration_**

Follow these steps to configure and run the application locally: 
- Clone the repository:
- ```bash git clone https://github.com/kennedysferreira/projectFoodExplorer.git ``
- ` - Enter the directory and install the dependencies:
- ```bash npm install ```
- - Fill in the variables following the .env. example:
  - ```bash VITE_BASE_URL=http://localhost:3333 ```
  - - Run the local server: ```bash npm run dev ```
    - - If no error occurs, the following message will be displayed:
      - ```bash VITE v5.1.1 ready in 215 ms ➜ Local: http://localhost:5173 ```



-To use all the resources, access the localhost indicated by VITE:

  `http://localhost:5173`
  <br/>
  <br/>

<h1 >Resources</h1>

The application has two personas:
-Customer:

  - Show all dishes
  - Show a specific dish
  - Search for a dish or ingredient
  - Add orders to cart - Place an order
  - Add dish to favorites
  - Access all favorites
  - Access order history
  - Access order status
  - Update account information
  - Access restaurant information page
    <br/>
    <br/>

- Administrator:

  - Show all dishes
  - Show a specific dish
  - Search for a dish or ingredient
  - Access all orders
  - Access order status
  - Update order status
  - Update account information
  - Access restaurant information page
  - Register a new dish
  - Update a dish
  - Delete a dish
  - Update an order
    <br/>
    <br/>

<h1 >Operation</h1>

<br/>

- ### **Log in**

  As soon as you access the application, the login screen will appear with the option to create an account for the first time. If all the data is correct, access is granted.
  <br/>
  <br/>

- ### **User**

 Within the application, the user has the following accesses:

  -`/` Home page that appears after logging in.

  -`/plateview/:id` Page for viewing a dish in detail by clicking on the card on the Home page.

  -`/profile` Page Accessed by a button located on the `Header` that allows the user to change their account details.

  -`/about` Page Accessed by a button located on the `Header` which contains some information about the restaurant.

  -`/favorites` Page Accessed by a button located on the `Header` that displays all the dishes added to the favorites.

  -`/order-history` Page Accessed by a button located on the `Header` that displays the order history.

  -`/cart`Page Accessed by a button located on the `Header` that displays the dishes added to the cart.

  -`/payment/:id`Page Accessed by a button located on the cart page that generates a request and allows the user to select the payment method.

  -`/payment/qrcode/:id` Page Accessed via a button located on the payment page, the redirect leads to a page that simulates a payment and updates the status of the dish.
  <br/>

- ### **Administrator**

 In addition to the pages available to users, the administrator has access to specific routes:

  -`/newplate` Page Accessed by a button located on the `Header` that allows you to add a new dish.

  -`/editplate/:id` Page Accessed via a button located on the plate card on the Home page.

  -`/order-history` Page Accessed by a button located on the `Header` that allows you to update the status of all available orders.

  <br/>
  <br/>

<h1 >Requirements</h1>

- The admin can control the status of each order via a select field. Orders will appear in a table by clicking on Order History.
- The user can mark a dish as a favorite by clicking on the heart that appears on each dish.
- The user can delete a dish from the cart and the total value of the order is updated automatically.
- By clicking on the my payment button, the user is redirected to a screen where they will see their order, the sum and the payment methods.
- The user can add items to the cart by clicking on the add button. The quantity is controlled by the "-" and "+" buttons.
- A structured project, with a good organization of folders and a good division of components.
- Functions, variables, classes, files, tables and all the other elements of the code have meaningful names, in line with good market practice.
- The application is responsive, according to the Mobile First concept, following the Figma model;
*** Translated with www.DeepL.com/Translator (free version) ***


  <br/>
  <br/>


