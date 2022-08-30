const Chance = require('chance');
const chance = new Chance();

const user = [
  {
    firstname: chance.first(),
    lastname: chance.last(),
    email: chance.email(),
    phone: chance.phone(),
    password: chance.string({ length: 8 }),
  },
  {
    firstname: chance.first(),
    lastname: chance.last(),
    email: chance.email(),
    phone: chance.phone(),
    password: chance.string({ length: 8 }),
  },
  {
    firstname: chance.first(),
    lastname: chance.last(),
    email: chance.email(),
    phone: chance.phone(),
    password: chance.string({ length: 8 }),
  },
  {
    firstname: chance.first(),
    lastname: chance.last(),
    email: chance.email(),
    phone: chance.phone(),
    password: chance.string({ length: 8 }),
  },
  {
    firstname: chance.first(),
    lastname: chance.last(),
    email: chance.email(),
    phone: chance.phone(),
    password: chance.string({ length: 8 }),
  }
]

const admin = [
  {
    firstname: 'admin',
    lastname: '1',
    email: 'admin@example.com',
    password: '12345'
  }
]

module.exports = { admin, user }