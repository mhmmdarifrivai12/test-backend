# 🛠️ Backend Test - Express + TypeScript + MySQL

---

## 🧑‍💻 Author

**Muhammad Arif Rivai**
S1 Informatika - Universitas Teknokrat


---

## 📁 API Documentation

### 📂 CATEGORY API

**Base URL:** `/api/categories`

| Method | Endpoint | Description        |
| ------ | -------- | ------------------ |
| GET    | `/`      | Get all categories |
| GET    | `/:id`   | Get category by ID |
| POST   | `/`      | Create category    |
| PUT    | `/:id`   | Update category    |
| DELETE | `/:id`   | Delete category    |

**POST / PUT Body:**

```json
{
  "name": "Makanan"
}
```

---

### 🛒 PRODUCT API

**Base URL:** `/api/products`

| Method | Endpoint | Description                 |
| ------ | -------- | --------------------------- |
| GET    | `/`      | Get all products + category |
| GET    | `/:id`   | Get product by ID           |
| POST   | `/`      | Create product              |
| PUT    | `/:id`   | Update product              |
| DELETE | `/:id`   | Delete product              |

**POST / PUT Body:**

```json
{
  "name": "Produk A",
  "desc": "Deskripsi produk",
  "image": "https://example.com/image.jpg",
  "category_id": 1
}
```

---

### 🧠 PALINDROME API

**Base URL:** `/api/palindrome`

| Method | Endpoint | Description                   |
| ------ | -------- | ----------------------------- |
| POST   | `/`      | Check if number is palindrome |

**Request Body:**

```json
{
  "x": 121
}
```

**Response:**

```json
{
  "input": 121,
  "palindrome": true
}
```

---

### 🐱 CATKITTY API

**Base URL:** `/api/catkitty`

#### ✅ 1. Print angka sampai ke-n dengan aturan

| Method | Endpoint | Description                   |
| ------ | -------- | ----------------------------- |
| POST   | `/`      | Cetak angka 1..n dengan rules |

**Request Body:**

```json
{
  "n": 15
}
```

**Response:**

```json
{
  "input": 15,
  "result": [
    "1", "2", "cat", "4", "kitty", "cat", "7", "8", "cat", "kitty", "11", "cat", "13", "14", "catKitty"
  ]
}
```

#### ✅ 2. Tambah aturan baru

| Method | Endpoint   | Description                 |
| ------ | ---------- | --------------------------- |
| POST   | `/addrule` | Tambahkan aturan angka baru |

**Request Body:**

```json
{
  "number": 13,
  "word": "dog"
}
```

**Response:**

```json
{
  "message": "Rule ditambahkan",
  "rules": {
    "3": "cat",
    "5": "kitty",
    "13": "dog"
  }
}
```

---

## 📦 Tech Stack

* Node.js
* Express
* TypeScript
* Sequelize ORM (MySQL)
* express-validator

