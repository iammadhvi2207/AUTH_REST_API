# 🔐 Auth + CRUD API (Node.js + MongoDB)

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
