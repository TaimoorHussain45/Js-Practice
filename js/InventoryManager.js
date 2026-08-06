const item1 = {
  id: 1,
  name: "Wireless Mouse",
  price: 25,
  qty: 10,
 
  category: "electronics",
};
const item2 = {
  id: 2,
  name: "Notebook",
  price: 3,
  qty: 0,
  
  category: "stationery",
};
const item3 = {
  id: 3,
  name: "Bluetooth Speaker",
  price: 45,
  qty: 0,
  category: "electronics",
};

function InventoryManager() {
  let productData = [];
  return {
    addItem: function (item) {
      productData.push(item);
      console.log(productData);
    },
    removeItem:  function (id) {
    let filterData= productData.filter((element) => element.id !== id);
    productData=filterData;
   
       },
      updateProduct: function (id, updateStock) {
        
         productData.forEach((element) => {
    if (element.id === id) {
    updateStock >=0 ? element.qty = updateStock:element.qty;
    }
  });
}, 
       getProduct: function (){
        let userData=productData;
        return [...userData]
       },
      
       
  
}
}

 function getTotalValues(items) {
        return items.reduce((total,items)=>  total+items.price * items.qty,0)
       }
    function getLowStock (items,minimumRange) {
    let filterData= items.filter((element)=> element.qty <= minimumRange )
    return filterData;
    }
    function groupByCategory(){}
    function getMostExpensive(items){
      const getMax = (a, b) => a.price > b.price  ?a: b;
        let maxObject= items.reduce((acc,curr)=> getMax(acc,curr))
        return maxObject;
    }   

let inventoryData = InventoryManager();
inventoryData.addItem(item1);
inventoryData.addItem(item2);
// inventoryData.removeItem(1);
// inventoryData.updateProduct(2,90)
let currentItems=inventoryData.getProduct()
console.log(currentItems)
console.log(getLowStock(currentItems,25))
console.log("Expensive book ",getMostExpensive(currentItems))