var myFood = {

vegetable: "carrot", 
fruit: "orange",
drink: "water"

};

function myFunction(myOby) {

var vegetableValue = myOby["vegetable"];
var fruitValue = myOby["fruit"];
var drinkValue = myOby["drink"];

return { vegetableValue, fruitValue, drinkValue };

}

console.log(myFunction(myFood));
module.exports = myFunction(myFood);