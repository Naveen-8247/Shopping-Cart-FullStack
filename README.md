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
