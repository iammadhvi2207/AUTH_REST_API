<h1 align="center">🔐 Auth + CRUD API (Node.js + MongoDB)</h1>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?lines=JWT+Authentication+System;REST+API+with+MongoDB;Built+Using+Node.js+and+Express&center=true&width=500&height=45">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge">
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/JWT-Authentication-blue?style=for-the-badge">
</p>

---

## 🚀 Features

* User Registration & Login (JWT Auth)
* Password hashing using bcrypt
* Protected routes using middleware
* CRUD operations (Items API)
* MongoDB Atlas integration
* RESTful API structure

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* bcryptjs

---

## 📂 Project Structure

```bash
AUTH_REST_API/
│── config/                # Database configuration
│── controllers/           # Route controllers
│── middleware/            # Authentication middleware
│── models/                # Mongoose models
│── routes/                # API routes
│── .env                   # Environment variables
│── server.js              # Main server file
│── package.json
│── README.md
```

---

## ⚙️ Setup

### 1. Clone repo

```bash
git clone https://github.com/iammadhvi2207/AUTH_REST_API.git
cd AUTH_API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run server

```bash
npm run dev
```

---

## 📡 API Endpoints

### 🔐 Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### 🔒 Protected

* GET `/protected`

### 📦 Items (CRUD)

* POST `/api/items`
* GET `/api/items`
* DELETE `/api/items/:id`

---

## 🔑 Authorization Header

```plaintext
Authorization: Bearer <your_token>
```

---

## ⚡ Scalability Notes

* Can be split into microservices (Auth + Items)
* Use Redis for caching
* Load balancing with Nginx
* Horizontal scaling with Docker/Kubernetes

---

## 📌 Author

Madhvi Mishra
