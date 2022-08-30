const Chance = require('chance');
const chance = new Chance();

const course = [
  {
    name: 'December Course',
    price: 9990000,
    description: 'This course mainly focuses on skiing bumps early season',
    resortId: chance.integer({ min: 1, max: 2 })
  },
  {
    name: 'January Course',
    price: 12500000,
    description: 'This course mainly focuses on big mountain',
    resortId: chance.integer({ min: 1, max: 2 })
  },
  {
    name: 'Febuary Course',
    price: 8990000,
    description: 'This course mainly focuses having a blast',
    resortId: chance.integer({ min: 1, max: 2 })
  },
  {
    name: 'Spring Course',
    price: 7950000,
    description: 'This course mainly focuses on skiing slush and drinking beers',
    resortId: chance.integer({ min: 1, max: 2 })
  }
]

module.exports = { course };