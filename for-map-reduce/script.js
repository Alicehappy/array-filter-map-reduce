const pizzas = [
  {
    name: "Calzone",
    toppings: ["Tomato sauce", "Cheese", "Ham", "Oregano"],
  },
  {
    name: "Hawaiian",
    toppings: ["Tomato sauce", "Cheese", "Pineapple"],
  },
  {
    name: "Frutti di mare",
    toppings: ["Tomato sauce", "shellfish", "squid", "clams", "scampi"],
  },
  {
    name: "Margherita",
    toppings: ["Tomato sauce", "Mozzarella", "Basil"],
  },
];

const comments = [
  {
    text: "I love pizza",
    rating: 5,
  },
  {
    text: "Why pineapple?",
    rating: 2,
  },
  {
    text: "I am very dissapointed with your lack of sushi pizza.",
    rating: 3,
  },
  {
    text: "Hey Alexa, how many pizzas can we fit in a Tesla?",
    rating: 5,
  },
  {
    text: "Pizza was cold.",
    rating: 1,
  },
];

const person = {
  name: "David",
  surname: "Abram",
  age: 30,
};

const people = [
  {
    name: "David",
    surname: "Abram",
    age: 30,
  },
  {
    name: "John",
    surname: "Smith",
    age: 39,
  },
];

function logNames(person) {
  console.log(person.name);
  debugger;
}

// people.forEach(logNames);

// pizzas.forEach(function (pizza, index, originalArray) {
//   debugger;
//   console.log(pizza.name);
//   if (index + 1 >= originalArray.length) {
//     console.log("There is no next pizza!");
//   } else {
//     console.log(`Next pizza: ${originalArray[index + 1].name}`);
//   }
// });

// function getPizzaNames(pizza, index, originalArray) {
//   // debugger;
//   return `${index} I want a ${pizza.name} pizza!`;
// }

// const pizzaNamess = pizzas.map(getPizzaNames);

// console.log(pizzaNamess);

// function getNumberOfToppings(pizza) {
//   return pizza.toppings.length;
// }

// const numberOfToppings = pizzas.map(getNumberOfToppings);
// console.log(numberOfToppings);

// const valuess = [10, 20, 30, 40];

// function isLargerThan25(value) {
//   debugger;
//   return value > 25;
// }

// const valuesLargerThan25 = valuess.filter(isLargerThan25);
// console.log(valuesLargerThan25);

//Reduce

// const valuess = [10, 20, 30, 40];

// let total = 0;

// valuess.forEach(function (value) {
//   total = total + value;
// });

// console.log(total);

// const valuess = [10, 20, 30, 40];

// function addNumbers(total, value) {
//   console.log(total, value);
//   debugger;
//   return total + value;
// }

// total = valuess.reduce(addNumbers, 0);

// console.log(total);

// function getAllNames(result, pizza, index, originalArray) {
//   if (index + 1 >= originalArray.length) {
//     return `${result} ${pizza.name}!`;
//   } else {
//     return `${result} ${pizza.name},`;
//   }
// }
// const allPizzas = pizzas.reduce(getAllNames, "We have these pizzas: ");

// console.log(allPizzas);

function getNumberOfToppings(pizza) {
  // debugger;
  return pizza.toppings.length;
}

function calculateAverage(result, value, index, originalArray) {
  // debugger;
  return result + value / originalArray.length;
}

function hasCheese(pizza) {
  return pizza.toppings.includes("Cheese");
}

// console.log(pizzas.filter(hasCheese));

//map: [4, 3, 5, 3]
const averageNumberOfToppings = pizzas
  .map(getNumberOfToppings)
  .reduce(calculateAverage, 0);

console.log(averageNumberOfToppings);

const averageNumberOfToppingsOnCheesePizzas = pizzas
  .filter(hasCheese)
  .map(getNumberOfToppings)
  .reduce(calculateAverage, 0);

console.log(averageNumberOfToppingsOnCheesePizzas);
// new line

// console.log(pizzas[1], pizzas[3].name);

// function logPizzaName(pizza) {
//   console.log(pizza.name);
// }

// pizzas.forEach(logPizzaName);

// pizzas.forEach(function (pizza) {
//   console.log(pizza);
// });

// function logEverything(pizza, index, originalArray) {
//   console.log(pizza.name);
//   if (originalArray.length > index + 1) {
//     console.log(`Next pizza is ${originalArray[index + 1].name}.`);
//   } else {
//     console.log("This is the last pizza.");
//   }
// }

// pizzas.forEach(logEverything);

// function getPizzaName(pizza) {
//   return pizza.name;
// }

// const pizzaNames = pizzas.map(getPizzaName);

// const names = pizzas.map(function (pizza, index, originalArray) {
//   return `${index} Pizza ${pizza.name}`;
// });

// console.log(pizzaNames, names);

// function hasCheese(pizza) {
//   return pizza.toppings.includes("Cheese");
// }

// const pizzasWithCheese = pizzas.filter(hasCheese).map(getPizzaName);

// console.log(pizzasWithCheese);

// const values = [10, 20, 30, 40];

// // Okay

// let total = 0;
// values.forEach(function (value) {
//   total = total + value;
// });

// console.log(total);

// // Best

// total = values.reduce(function (total, value) {
//   return total + value;
// }, 0);

// console.log(total);

// const averageRating = comments.reduce(function (total, value, index, array) {
//   return total + value.rating / array.length;
// }, 0);

// console.log(averageRating);

// const bestRated = comments.reduce(function (total, value, index, array) {
//   if (total && value.rating > total.rating) {
//     return value;
//   } else {
//     return total;
//   }
// });

// console.log(bestRated);

// function getNumberOfToppings(pizza) {
//   return pizza.toppings.length;
// }

// function calculateAverageToppings(total, number, index, array) {
//   return total + number / array.length;
// }

// const averageToppings = pizzas
//   .map(getNumberOfToppings)
//   .reduce(calculateAverageToppings);
// console.log(averageToppings);

// const averageToppingsOnCheesePizzas = pizzas
//   .filter(hasCheese)
//   .map(getNumberOfToppings)
//   .reduce(calculateAverageToppings);

// console.log(averageToppingsOnCheesePizzas);

// for (let index = 0; index < pizzas.length; index++) {
//   console.log(index, pizzas[index].name);
// }

// for (const pizza of pizzas) {
//   console.log(pizza.name);
// }
