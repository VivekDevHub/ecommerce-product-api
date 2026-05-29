# Simple E-commerce Product API

## Goal

Build an API to handle e-commerce products, including:

* Product Creation
* Product Reading
* Product Updating
* Product Deletion
* Multiple Image Uploading
* Basic Category Management

---

# Folder Structure

You can create the folder structure according to your own understanding and project planning, but make sure the structure is:

* Clean
* Properly Organized
* Scalable

Example Structure:

```bash id="y4j2sx"
project/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validations/
│   └── app.js
│
├── uploads/
├── .env
├── package.json
├── server.js
└── README.md
```

---

# Simplified Explanation

1. A client sends a product-related request to the server.
2. The router identifies the correct route for the request.
3. The request passes through the authentication middleware.
4. The relevant controller executes the business logic.
5. The controller interacts with the database if required.
6. The controller sends a response back to the client, or the error handler sends an error response.

---

# Technical Approach

## 1. Setup

Set up the project in the same way as taught in the previous tasks and sessions.

---

# 2. Database

Use the existing MongoDB connection.

Create a Mongoose Product model.

## Product Schema Fields

| Field       | Type             | Required |
| ----------- | ---------------- | -------- |
| name        | String           | Yes      |
| description | String           | No       |
| price       | Number           | Yes      |
| category    | String           | No       |
| images      | Array of Strings | No       |

Example Schema:

```js id="w9u4f1"
{
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String]
}
```

---

# 3. Routes

Create product routes.

---

# API Endpoints

## GET /products

Get all products.

### Features

* Fetch all products
* Add category filtering using query params

### Example

```http id="d0q7mk"
GET /products?category=electronics
```

---

## GET /products/:id

Get a specific product by ID.

### Example

```http id="b1g2pr"
GET /products/6857ab1234
```

---

## POST /products

Create a new product.

### Requirements

* Authentication required
* Multiple image upload support

---

## PUT /products/:id

Update a product by ID.

### Requirements

* Authentication required

---

## DELETE /products/:id

Delete a product by ID.

### Requirements

* Authentication required

---

# Controllers

Create controller functions.

## Functions

* getAllProducts
* getProductById
* createProduct
* updateProduct
* deleteProduct

---

# Middleware

Use authentication middleware.

## Protect Routes

* POST /products
* PUT /products/:id
* DELETE /products/:id

---

# Multer for Multiple Uploads

Configure Multer for multiple image uploads.

## Use

```js id="f0u2na"
upload.array("images", 5)
```

## Requirements

* Accept multiple images
* Use files instead of file
* Save image URLs in an array

### Example

```js id="z8m4ke"
images: [
  "image1.jpg",
  "image2.jpg"
]
```

---

# Category Filtering

Implement category filtering using query parameters.

## Example

```http id="v5h8el"
GET /products?category=electronics
```

---

# Error Handling

Handle the following errors properly:

* Database errors
* Authentication errors
* Validation errors
* Invalid product ID errors
* Missing fields errors

---

# Environment Variables

Use `.env` file for:

* MongoDB URL
* JWT Secret
* Port
* Other sensitive data

Example:

```env id="e8k2wr"
PORT=3000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

# Validation

Implement proper validation to prevent invalid data.

You can use:

* express-validator

## Validate

* Product name
* Product price
* Required fields
* Valid request body

---

# Testing

Test all API endpoints properly using:

* Postman
* Thunder Client

## Make Sure

* All routes work correctly
* Authentication works
* Image uploads work
* Category filtering works
* Error handling works

---

# API Documentation

Create proper API documentation for every API endpoint.

## Documentation Should Include

* Route
* Method
* Required fields
* Request body
* Response format
* Authentication requirement
* Example request
* Example response
* Error responses

---

# Sample Success Response

```json id="t6a0cw"
{
  "success": true,
  "message": "Request successful",
  "data": {}
}
```

---

# Sample Error Response

```json id="k4w9nt"
{
  "success": false,
  "message": "Invalid product ID"
}
```

---

# Submission Deadline

## Saturday – 3:00 PM

---

# Author

Vivek Kushwah
