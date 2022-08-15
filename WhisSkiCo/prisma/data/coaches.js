const Chance = require('chance');
const chance = new Chance();

const coach = [
  {
    firstname: 'G',
    lastname: 'D',
    bio: chance.paragraph()
  },
  {
    firstname: 'M',
    lastname: 'C',
    bio: chance.paragraph()
  },
  {
    firstname: 'J',
    lastname: 'S',
    bio: chance.paragraph()
  },

]