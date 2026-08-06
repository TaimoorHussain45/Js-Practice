const inventoryItemOne = {
  id: 1,
  name: "Wireless Mouse",
  price: 25,
  qty: 10,
  category: "electronics",
};
const inventoryItemTwo = {
  id: 2,
  name: "Notebook",
  price: 3,
  qty: 0,
  category: "stationery",
};
const inventoryItemThree = {
  id: 3,
  name: "Bluetooth Speaker",
  price: 45,
  qty: 0,
  category: "electronics",
};

function InventoryManagementService() {
  let inventoryProducts = [];
  return {
    addItem: function (item) {
      inventoryProducts.push(item);
      console.log(inventoryProducts);
    },
    removeItem: function (id) {
      let filteredProducts = inventoryProducts.filter((element) => element.id !== id);
      inventoryProducts = filteredProducts;
    },
    updateProductStock: function (id, updateStock) {
      inventoryProducts.forEach((element) => {
        if (element.id === id) {
          updateStock >= 0 ? (element.qty = updateStock) : element.qty;
        }
      });
    },
    getProduct: function () {
      let currentInventoryProducts = inventoryProducts;
      return [...currentInventoryProducts];
    },
  };
}

function calculateTotalInventoryValue(items) {
  return items.reduce((total, item) => total + item.price * item.qty, 0);
}
function getLowStockItems(items, minimumRange) {
  let filteredProducts = items.filter((element) => element.qty <= minimumRange);
  return filteredProducts;
}
// in progress
// function groupByCategory(items){
//   const getSameCategory = (a, b,c) => c =a.category === b.category ? [...a] : b;
//       let initailvalues={}
//     let sameCategory = items.reduce((acc,curr)=> [ getSameCategory(acc,curr,initailvalues)])
//     return sameCategory;
// }
function getMostExpensiveItem(items) {
  const getMax = (a, b) => (a.price > b.price ? a : b);
  let expensiveProduct = items.reduce((acc, curr) => getMax(acc, curr));
  return expensiveProduct;
}

let inventoryService = InventoryManagementService();
inventoryService.addItem(inventoryItemOne);
inventoryService.addItem(inventoryItemTwo);
inventoryService.addItem(inventoryItemThree);
// inventoryService.removeItem(1);
// inventoryService.updateProductStock(2,90)
let currentInventoryItems = inventoryService.getProduct();
console.log(currentInventoryItems);
console.log(getLowStockItems(currentInventoryItems, 25));
console.log("Expensive book ", getMostExpensiveItem(currentInventoryItems));
console.log("category", groupByCategory(currentInventoryItems));