//Function Declaration
function square (number) {
  return number * number;
}
console.log(square(5));

//Function Expression
const square = function (number) {
  return number * number;
};
console.log(square(5));

//Arrow Function
const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};
console.log('The temperature is ' + getFahrenheit(15) + '°F');

//ES6
const multiplyByNineFifths = celsius => celsius * (9/5);
const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;
console.log('The temperature is ' + getFahrenheit(15) + '°F');


//




Example
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount ++;
  console.log('Order: '+orderCount+' '+crustType+' pizza topped with '+topping);
}

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}
const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06;
}
const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
}

takeOrder('mushrooms','thin');
takeOrder('bacon','pan');
takeOrder('cheeze','deep');

console.log(getSubTotal(orderCount));
console.log(getTax(orderCount));
console.log(getTotal());
