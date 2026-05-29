# Simple E-commerce Product API

A RESTful API for managing e-commerce products with authentication, multiple image uploads, category filtering, validation, and error handling using Node.js, Express.js, MongoDB, and Mongoose.

---

# Features

* Create Product
* Get All Products
* Get Product By ID
* Update Product
* Delete Product
* Category Filtering
* Multiple Image Upload
* JWT Authentication
* Input Validation
* Error Handling
* MongoDB Database Integration
* REST API Architecture

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Express Validator
* dotenv

---

# Folder Structure

```bash
project/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── product.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── upload.middleware.js
│   │
│   ├── models/
│   │   └── product.model.js
│   │
│   ├── routes/
│   │   └── product.routes.js
│   │
│   ├── validations/
│   │   └── product.validation.js
│   │
│   └── app.js
│
├── uploads/
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Move to Project Folder

```bash
cd project-name
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root folder.

```env
PORT=3000
MONGODB_URL=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

# Run Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# Product Schema

```js
{
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String]
}
```

---

# API Endpoints

---

# 1. Get All Products

## Route

```http
GET /products
```

## Query Params

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| category  | String | Filter by category |

## Example

```http
GET /products?category=electronics
```

## Success Response

```json
{
  "success": true,
  "products": []
}
```

---

# 2. Get Product By ID

## Route

```http
GET /products/:id
```

## Example

```http
GET /products/6857ab1234
```

## Success Response

```json
{
  "success": true,
  "product": {}
}
```

---

# 3. Create Product

## Route

```http
POST /products
```

## Authentication

Required

## Form Data

| Field       | Type   |
| ----------- | ------ |
| name        | String |
| description | String |
| price       | Number |
| category    | String |
| images      | Files  |

## Example Response

```json
{
  "success": true,
  "message": "Product created successfully"
}
```

---

# 4. Update Product

## Route

```http
PUT /products/:id
```

## Authentication

Required

## Example Response

```json
{
  "success": true,
  "message": "Product updated successfully"
}
```

---

# 5. Delete Product

## Route

```http
DELETE /products/:id
```

## Authentication

Required

## Example Response

```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

---

# Authentication

Protected Routes:

* POST /products
* PUT /products/:id
* DELETE /products/:id

JWT Token required in headers:

```http
Authorization: Bearer your_token
```

---

# Multer Configuration

Used for multiple image uploads.

```js
upload.array("images", 5)
```

Uploaded image paths are stored in the database as an array.

Example:

```js
images: [
  "uploads/image1.jpg",
  "uploads/image2.jpg"
]
```

---

# Validation

Validation handled using `express-validator`.

Validated Fields:

* Product Name
* Product Price
* Required Fields
* Request Body

---

# Error Handling

The API handles:

* Database Errors
* Authentication Errors
* Validation Errors
* Invalid Product ID
* Missing Fields
* Server Errors

---

# Testing

You can test APIs using:

* Postman
* Thunder Client

Test Cases:

* Product CRUD
* Authentication
* Multiple Image Upload
* Category Filtering
* Validation Errors

---

# Sample Success Response

```json
{
  "success": true,
  "message": "Request successful",
  "data": {}
}
```

---

# Sample Error Response

```json
{
  "success": false,
  "message": "Invalid product ID"
}
```

---

# Future Improvements

* Pagination
* Search Products
* Cloudinary Image Upload
* Product Reviews
* User Roles
* Wishlist
* Cart System
* Order Management

---

# Author

Vivek Kushwah

---

# License

This project is for learning purposes.
