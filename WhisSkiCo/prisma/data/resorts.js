const Chance = require('chance');
const chance = new Chance();

const resort = [
  {
    name: 'Whistler Blackcomb',
    province: 'BC',
    country: 'Canada',
    description: chance.string({ length: 100 }),
  },
  {
    name: 'Lake Louise',
    province: 'AB',
    country: 'Canada',
    description: chance.string({ length: 100 }),
  }
]

module.exports = { resort }