# check-City

A package to count how many people are in each city.

## Installation

```bash
npm install github:Ashurai84/check-City
```

## Usage

```javascript
const { countPeopleByCity } = require('check-city');

const people = [
  { name: 'John', city: 'Delhi' },
  { name: 'Jane', city: 'Mumbai' },
  { name: 'Bob', city: 'Delhi' },
  { name: 'Alice', city: 'Bangalore' }
];

const result = countPeopleByCity(people);
console.log(result);
// Output: { Delhi: 2, Mumbai: 1, Bangalore: 1 }
```

## License

ISC
