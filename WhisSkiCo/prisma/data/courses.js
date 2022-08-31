const Chance = require('chance');
const chance = new Chance();

const course = [
  {
    name: 'December Course',
    price: 999,
    description: 'This course mainly focuses on skiing bumps early season',
    resortId: chance.integer({ min: 1, max: 2 })
  },
  {
    name: 'January Course',
    price: 1250,
    description: 'This course mainly focuses on big mountain',
    resortId: chance.integer({ min: 1, max: 2 })
  },
  {
    name: 'Febuary Course',
    price: 899,
    description: 'This course mainly focuses having a blast',
    resortId: chance.integer({ min: 1, max: 2 })
  },
  {
    name: 'Spring Course',
    price: 795,
    description: 'This course mainly focuses on skiing slush and drinking beers',
    resortId: chance.integer({ min: 1, max: 2 })
  }
]

module.exports = { course };