📁 Final Project Structure
shopping-cart-app
│
├── backend
│   ├── controllers
│   │   ├── userController.js
│   │   ├── itemController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   │
│   ├── middleware
│   │   └── auth.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Item.js
│   │   ├── Cart.js
│   │   └── Order.js
│   │
│   ├── routes
│   │   ├── userRoutes.js
│   │   ├── itemRoutes.js
│   │   ├── cartRoutes.js
│   │   └── orderRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ItemList.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── .gitignore
└── README.md

📄 README.md (Copy this exactly)

Create README.md in project root and paste 👇

🛒 ShopEasy – Full Stack Shopping Cart App

A full-stack e-commerce web application built for the ABCDE Ventures Assignment.

The application demonstrates the full lifecycle of an e-commerce flow:

User Signup → Login → Browse Items → Add to Cart → Place Order → Logout

🚀 Tech Stack
Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcryptjs

CORS

Frontend

React (Vite)

Tailwind CSS

Axios

Lucide React Icons

⭐ Key Features
🔐 Authentication

User Signup & Login

Password hashing using bcrypt

JWT based authentication

Single Device Login Restriction

Only one active session allowed

Login blocked if already logged in elsewhere

Token cleared on logout

🛍️ Shopping Features

Browse product catalog

Add items to cart

View cart items

Checkout & place orders

View order history

📂 Project Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/shopping-cart-app.git
cd shopping-cart-app

⚙️ Backend Setup
Install dependencies
cd backend
npm install

Create .env file inside backend folder
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/shoppingcart
JWT_SECRET=mysecretkey

Start backend server
node server.js


Server runs on:

http://localhost:5000

💻 Frontend Setup
Install dependencies
cd frontend
npm install

Start React app
npm run dev


Frontend runs on:

http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
POST	/users	Signup
POST	/users/login	Login
POST	/users/logout	Logout
GET	/items	Get products
POST	/carts	Add to cart
GET	/carts	View cart
POST	/orders	Checkout
GET	/orders	Order history
🔒 Single Device Login Logic

When user logs in:

JWT token generated

Token saved in DB

If token already exists → login blocked

Logout removes token from DB

🎯 Assignment Objective Completed

✔ User creation
✔ Authentication with JWT
✔ Single device session restriction
✔ Cart management
✔ Order placement
✔ React UI with Tailwind
✔ Full stack integration

👨‍💻 Author

Naveen Yadav

🎉 Future Improvements

Product images & pricing

Payment gateway integration

Admin dashboard

Deployment on Render
