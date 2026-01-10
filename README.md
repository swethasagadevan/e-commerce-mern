# 🛒 MERN E-Commerce Website

A full-stack E-Commerce Web Application built using the MERN Stack (MongoDB, Express.js, React, Node.js) with secure Razorpay payment gateway integration. The platform allows users to browse products, manage carts, place orders, and complete payments seamlessly.

## 🚀 Features

- User authentication (Register / Login)
- Product listing & product details page
- Add to cart & remove from cart
- Order placement & checkout
- Razorpay payment gateway integration
- Order history tracking
- Responsive UI for all screen sizes

## 🛠️ Tech Stack
- Frontend
  - React.js
  - React Router
  - Axios
  - CSS & Tailwind CSS

- Backend
  - Node.js
  - Express.js
  - MongoDB & Mongoose
  - Razorpay API

## 🔐 Payment Integration

- Integrated Razorpay for secure online payments
- Supports real-time payment verification
- Handles payment success and failure callbacks

## 📁 Project Structure
```bash
ecommerce-mern/
│
├── client/          # React frontend
│   ├── src/
│   └── package.json
│
├── server/          # Node & Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── .env
└── README.md
```
## ⚙️ Environment Variables

Create a .env file in the server directory and add:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```
## ▶️ Installation & Setup
1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
2️⃣ Install Backend Dependencies
```bash
cd server
npm install
npm start
```
3️⃣ Install Frontend Dependencies
```bash
cd client
npm install
npm start
```
## 🌐 API Endpoints (Sample)

GET /products – Fetch all products

GET /products/:id – Fetch single product

POST /api/orders – Create order

POST /api/payment – Razorpay payment initiation


## 🧪 Future Enhancements

- Wishlist functionality
- Product reviews & ratings
- JWT refresh tokens
- Deployment on AWS / Vercel

## 👩‍💻 Author

Swetha
MERN Stack Developer
📧 Email: swethasagadevan@gmail.com

## ⭐ Acknowledgements

- Razorpay Documentation
- MongoDB Atlas
- React & Node.js Community
