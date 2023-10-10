//You are given array of products, pricing and categories , write an optimized nodejs program to
// return the expected result.

const productsArray = [
    { "id": 1, "sku": "abc", "productName": "name 1", "category": 1 },
    { "id": 2, "sku": "def", "productName": "name 2", "category": 2 },
    { "id": 3, "sku": "ghi", "productName": "name 1", "category": 2 },
    { "id": 4, "sku": "klm", "productName": "name 1", "category": 3 },
    { "id": 5, "sku": "xyz", "productName": "name 1", "category": 1 }
  ];

  const categoriesArray = [
    { "id": 1, "name": "category 1" },
    { "id": 2, "name": "category 2" },
    { "id": 3, "name": "category 3" },
    { "id": 4, "name": "category 4" },
    { "id": 5, "name": "category 5" }
  ];
  
  const pricingArray = [
    { "sku": "abc", "price": 10 },
    { "sku": "def", "price": 20 },
    { "sku": "ghi", "price": 30 },
    { "sku": "klm", "price": 40 },
    { "sku": "xyz", "price": 50 }
  ];
  
  for(i = 0; i < productsArray.length; i++){
     const result  = pricingArray.find((priceObj) => productsArray[i].sku === priceObj.sku);
     console.log(result);
     productsArray[i].price = result.price;
  }
  console.log(productsArray);