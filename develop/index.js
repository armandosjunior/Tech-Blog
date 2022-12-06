const sequelize = require('../config/')

const seedTag = require('.Data');
const Category = require('./seedsata');
const seedProductTag = requrie();



const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedGallery();
  
    await seedPaintings();
  
    process.exit(0);
  };
  
  seedAll();
  