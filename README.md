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

// Sample data - array of people with city information
const people = [
  { name: 'Rahul', city: 'Delhi' },
  { name: 'Priya', city: 'Mumbai' },
  { name: 'Amit', city: 'Delhi' },
  { name: 'Sneha', city: 'Bangalore' },
  { name: 'Vikram', city: 'delhi' },  // lowercase - still matches!
  { name: 'Anjali', city: 'Mumbai' }
];

// Count people in Delhi
const delhiCount = checkCityCount(people, 'Delhi');
console.log(`People in Delhi: ${delhiCount}`);
// Output: People in Delhi: 3

// Count people in Mumbai
const mumbaiCount = checkCityCount(people, 'mumbai');
console.log(`People in Mumbai: ${mumbaiCount}`);
// Output: People in Mumbai: 2
```

### Real-World Use Case

```javascript
const checkCityCount = require('@ashuhrai_71/city-count');

// Employee database
const employees = [
  { id: 1, name: 'John Doe', city: 'New York', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', city: 'Los Angeles', department: 'Marketing' },
  { id: 3, name: 'Bob Wilson', city: 'New York', department: 'Sales' },
  { id: 4, name: 'Alice Brown', city: 'Chicago', department: 'Engineering' },
  { id: 5, name: 'Charlie Davis', city: 'new york', department: 'HR' }
];

// Get count of employees in New York
const nyEmployees = checkCityCount(employees, 'New York');
console.log(`Employees in New York office: ${nyEmployees}`);
// Output: Employees in New York office: 3
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
