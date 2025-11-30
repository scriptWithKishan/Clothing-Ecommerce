# E-Commerce Application

A full-stack e-commerce application for clothing with React frontend and Node.js/Express backend.

## Tech Stack

### Frontend
- React 19
- React Router v6
- Tailwind CSS
- Axios
- Context API for state management

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

- git clone https://github.com/scriptWithKishan/Clothing-Ecommerce.git

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

4. Seed the database:
```bash
node product-seed.js
```

5. Start the server:
```bash
npm start
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Features

- User authentication (register/login)
- Product browsing with pagination
- Category and price filtering
- Product search
- Shopping cart with localStorage persistence
- Checkout and order placement
- Responsive design

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/products` - Get all products (with pagination)
- `GET /api/products/:id` - Get single product
- `POST /api/orders` - Create new order (protected)

## Project Structure

```
clothing-ecommerce/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utility/
│   └── app.js
└── frontend/
    └── src/
        ├── components/
        ├── context/
        ├── pages/
        ├── services/
        └── App.jsx
```
