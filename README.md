# @ashuhrai_71/city-count

[![npm version](https://img.shields.io/npm/v/@ashuhrai_71/city-count.svg)](https://www.npmjs.com/package/@ashuhrai_71/city-count)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A lightweight, easy-to-use Node.js package to count the number of people in a specific city from an array of data. Perfect for data analysis, filtering datasets, and generating city-based statistics.

## ✨ Features

- 🔍 **Case-insensitive** city name matching
- 🚀 **Lightweight** with zero dependencies
- 📦 **Simple API** - just one function
- ✅ **Easy to use** in any Node.js project

## 📦 Installation

```bash
npm install @ashuhrai_71/city-count
```

## 🚀 Usage

### Basic Example

```javascript
const checkCityCount = require('@ashuhrai_71/city-count');

// Sample data - array of users with city information
const users = [
  { name: 'Saurabh', city: 'Mumbai' },
  { name: 'Tejas', city: 'Pune' },
  { name: 'Ashutosh', city: 'Delhi' },
  { name: 'Priya', city: 'Mumbai' },
  { name: 'Rahul', city: 'Pune' },
  { name: 'Neha', city: 'Delhi' }
];

// Count people in Mumbai
const mumbaiCount = checkCityCount(users, 'Mumbai');
console.log(`People in Mumbai: ${mumbaiCount}`);
// Output: People in Mumbai: 2

// Count people in Pune
const puneCount = checkCityCount(users, 'Pune');
console.log(`People in Pune: ${puneCount}`);
// Output: People in Pune: 2

// Count people in Delhi (case-insensitive!)
const delhiCount = checkCityCount(users, 'delhi');
console.log(`People in Delhi: ${delhiCount}`);
// Output: People in Delhi: 2
```

### Real-World Use Case: Express.js API

```javascript
import express from "express";
import cors from "cors";
import checkCityCount from "@ashuhrai_71/city-count";

const app = express();
app.use(cors());

// User data
const users = [
  { name: "Saurabh", city: "Mumbai" },
  { name: "Tejas", city: "Pune" },
  { name: "Ashutosh", city: "Delhi" },
  { name: "Priya", city: "Mumbai" },
  { name: "Rahul", city: "Pune" },
  { name: "Neha", city: "Delhi" }
];

// Get all users and log city count
app.get("/api/v1/users", (req, res) => {
  res.json(users);
  
  const count = checkCityCount(users, "Mumbai");
  console.log("Number of users in Mumbai:", count);
  // Output: Number of users in Mumbai: 2
});

// Get count for a specific city
app.get("/api/v1/city-count/:city", (req, res) => {
  const city = req.params.city;
  const count = checkCityCount(users, city);
  res.json({ city, count });
  // GET /api/v1/city-count/Pune → { "city": "Pune", "count": 2 }
});

app.listen(8000, () => {
  console.log("Server Up and Running");
});
```

## 📖 API Reference

### `checkCityCount(data, city)`

Counts the number of objects in an array that have a matching city property.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `Array<Object>` | An array of objects, each containing a `city` property |
| `city` | `string` | The city name to search for (case-insensitive) |

#### Returns

| Type | Description |
|------|-------------|
| `number` | The count of objects matching the specified city |

## 🔧 Requirements

- Node.js >= 12.0.0
- Objects in the array must have a `city` property

## 📄 License

ISC

## 👤 Author

**Ashurai84**

- GitHub: [@Ashurai84](https://github.com/Ashurai84)
- npm: [@ashuhrai_71](https://www.npmjs.com/~ashuhrai_71)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Ashurai84/check-City/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ in India
