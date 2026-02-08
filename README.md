# 🛒 ShopEasy – Full Stack Shopping Cart App

A full-stack e-commerce web application built for the ABCDE Ventures Assignment. The application demonstrates the full lifecycle of an e-commerce flow: 
**User Signup → Login → Browse Items → Add to Cart → Place Order → Logout**

## 🚀 Tech Stack

### Backend
* **Node.js** & **Express.js**
* **MongoDB** + **Mongoose**
* **JWT Authentication**
* **bcryptjs** (Password hashing)
* **CORS**

### Frontend
* **React (Vite)**
* **Tailwind CSS**
* **Axios** (API Requests)
* **Lucide React Icons**

---

## ⭐ Key Features

### 🔐 Authentication
* **User Signup & Login**: Secure entry with password hashing.
* **JWT Based**: State-managed security tokens.
* **Single Device Login Restriction**: 
    * Only one active session allowed at a time.
    * Login blocked if already logged in elsewhere.
    * Token cleared immediately on logout.

### 🛍️ Shopping Features
* **Product Catalog**: Browse all available items.
* **Cart Management**: Add items to your personal cart and view them.
* **Checkout**: Place orders with a single click.
* **Order History**: View all past transactions.

---

## 📁 Project Structure

```text
shopping-cart-app
│
├── backend
│   ├── controllers (Logic for users, items, cart, orders)
│   ├── middleware (Auth guard)
│   ├── models (Database schemas)
│   ├── routes (API endpoints)
│   ├── .env (Configuration)
│   └── server.js (Entry point)
│
└── frontend
    ├── src
    │   ├── components (UI Views: Login, Navbar, ItemList)
    │   ├── App.jsx
    │   └── main.jsx
    ├── tailwind.config.js
    └── package.json
📂 Project Setup1️⃣ Clone RepositoryBashgit clone [https://github.com/Naveen-8247/Shopping-Cart-FullStack.git](https://github.com/Naveen-8247/Shopping-Cart-FullStack.git)
cd shopping-cart-app
⚙️ Backend SetupInstall dependencies:Bashcd backend
npm install
Create .env file inside the backend folder:Code snippetPORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/shoppingcart
JWT_SECRET=mysecretkey
Start backend server:Bashnode server.js
Server runs on: http://localhost:5000💻 Frontend SetupInstall dependencies:Bashcd frontend
npm install
Start React app:Bashnpm run dev
Frontend runs on: http://localhost:5173🔗 API EndpointsMethodEndpointDescriptionPOST/usersSignupPOST/users/loginLoginPOST/users/logoutLogoutGET/itemsGet productsPOST/cartsAdd to cartGET/cartsView cartPOST/ordersCheckoutGET/ordersOrder history🎯 Assignment Objective Completed[x] User creation & Authentication (JWT)[x] Single device session restriction[x] Cart management & Order placement[x] Responsive React UI with Tailwind[x] Full stack integration👨‍💻 AuthorNaveen Yadav🎉 Future ImprovementsProduct images & pricingPayment gateway integration (Stripe/Razorpay)Admin dashboard for inventory management
