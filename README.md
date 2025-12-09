# @ashuhrai_71/city-count

[![npm version](https://img.shields.io/npm/v/@ashuhrai_71/city-count.svg)](https://www.npmjs.com/package/@ashuhrai_71/city-count)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A lightweight Node.js package to count people by city from an array of data.

## 📦 Installation

```bash
npm install @ashuhrai_71/city-count
```

## 🚀 Usage

```javascript
const checkCityCount = require('@ashuhrai_71/city-count');

const data = [
  { name: 'Saurabh', city: 'Mumbai' },
  { name: 'Tejas', city: 'Pune' },
  { name: 'Ashutosh', city: 'Delhi' },
  { name: 'Priya', city: 'Mumbai' },
  { name: 'Rahul', city: 'Pune' },
  { name: 'Neha', city: 'Delhi' }
];

const count = checkCityCount(data, 'Mumbai');
console.log(count); // Output: 2
```

## 📖 API

### `checkCityCount(data, city)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `Array` | Array of objects with a `city` property |
| `city` | `string` | City name to count (case-insensitive) |

**Returns:** `number` - Count of matching entries

## 📄 License

ISC

## 👤 Author

**Ashurai84** - [GitHub](https://github.com/Ashurai84)

---

Made with ❤️ in India
