// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

/*Class refernce 

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
    foreignKey: 'gallery_id',
  });
  */

// Products belongsTo Category
// Categories have many Products
// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)

Product.belongsTo(Category, {
    foreignKey: "category_id",
});

Category.hasMany(Product, {
    foreignKey: "category_id",
    onDelete: "SET NULL",
});

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: "product_id",
});

Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: "tag_id",
});



module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };