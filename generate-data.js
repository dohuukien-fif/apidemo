const { fake } = require('faker');
const faker = require('faker');
const fs = require('fs');
//set
faker.locale = 'vi';

const randomCategorylisst = (n) => {
  if (n <= 0) return [];
  const cateLisst = [];
  //loop
  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.random.word().length + Date.now(),
      name: faker.commerce.department(),

      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    cateLisst.push(category);
  });
  return cateLisst;
};
const randomCategoryCategory = (n) => {
  if (n <= 0) return [];
  const cateLisst = [];
  //loop
  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),

      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    cateLisst.push(category);
  });
  return cateLisst;
};
const randomProductList = (categoryLisst, numberProduct) => {
  if (numberProduct <= 0) return [];
  const Products = [];
  for (const category of categoryLisst) {
    Array.from(new Array(numberProduct)).forEach(() => {
      const productList = {
        categoryName: category.name,

        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),

        isPromotion: faker.datatype.boolean(),
        isFreeship: faker.datatype.boolean(),
        isDiscount: faker.datatype.boolean(),
        isInformation: faker.datatype.boolean(),
        isShop: faker.datatype.boolean(),
        origin: faker.address.country(),
        color: faker.internet.color(),
        sex: faker.name.gender(),
        Araray: faker.datatype.array(),
        evaluate: faker.datatype.number(),

        originalPrice: Number.parseFloat(faker.commerce.price(((min = 50000), (max = 200000)))),
        price: Number.parseFloat(faker.commerce.price((min = 400000), (max = 1000000))),
        promotionpencent: Number.parseInt(faker.commerce.price((min = 1), (max = 10))),
        description: faker.commerce.productDescription(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        thumbnailUrl: faker.image.imageUrl(400, 400),
        SearchTerm: faker.commerce.productName(),
        size: faker.datatype.number((max = 10)),
        height: faker.datatype.number((max = 10)),
        width: faker.datatype.number((max = 10)),
      };
      Products.push(productList);
    });
  }

  return Products;
};
const randomProductCategory = (categoryLisst, numberProduct) => {
  if (numberProduct <= 0) return [];
  const Products = [];
  for (const category of categoryLisst) {
    Array.from(new Array(numberProduct)).forEach(() => {
      const productList = {
        categoryName: category.name,
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        isPromotion: faker.datatype.boolean(),
        isFreeship: faker.datatype.boolean(),
        isDiscount: faker.datatype.boolean(),
        isInformation: faker.datatype.boolean(),
        isShop: faker.datatype.boolean(),
        origin: faker.address.country(),
        color: faker.internet.color(),
        sex: faker.name.gender(),
        Araray: faker.datatype.array(),
        evaluate: faker.datatype.number(),

        originalPrice: Number.parseFloat(faker.commerce.price(((min = 50000), (max = 200000)))),
        price: Number.parseFloat(faker.commerce.price((min = 400000), (max = 1000000))),
        promotionpencent: Number.parseInt(faker.commerce.price((min = 1), (max = 10))),
        description: faker.commerce.productDescription(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        thumbnailUrl: faker.image.imageUrl(400, 400),
        SearchTerm: faker.commerce.productName(),
        size: faker.datatype.number((max = 10)),
        height: faker.datatype.number((max = 10)),
        width: faker.datatype.number((max = 10)),
      };
      Products.push(productList);
    });
  }

  return Products;
};
(() => {
  const categoryLisst = randomCategorylisst(10);
  const randomCategory = randomCategoryCategory(10);
  const productLissts = randomProductList(categoryLisst, 5);
  const productCategory = randomProductCategory(randomCategory, 5);
  const db = {
    products: productLissts,
    categories: categoryLisst,
    mypham: productCategory,
    áo: productCategory,
    quần: productCategory,
    mũ: productCategory,
    son: productCategory,
    kính: productCategory,
    giày: productCategory,
    categoriesMypham: randomCategory,
    categoriesShirt: randomCategory,
    categoriesQuan: randomCategory,
    categoriesHat: randomCategory,
    categoriesSon: randomCategory,
    categoriesMypham: randomCategory,

    user: [],
  };
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('kien dep trai qu d');
  });
})();
