const groupNames = ["Christian", "Essence", "Patrick", "Brandon", "Brady"];

const foodTypes = ["Pizza", "Sushi", "Burger", "Pasta", "Salad", "Tacos", "Steak", "Ice Cream", "Soup", "Sandwich"];

const statesInfo = [
    ["California", "Sacramento", "California Quail"],
    ["Texas", "Austin", "Northern Mockingbird"],
    ["Florida", "Tallahassee", "Northern Mockingbird"],
    ["New York", "Albany", "Eastern Bluebird"],
    ["Illinois", "Springfield", "Northern Cardinal"],
    ["Pennsylvania", "Harrisburg", "Ruffed Grouse"],
    ["Ohio", "Columbus", "Northern Cardinal"]
  ];
  
  console.log("Group Names:");
groupNames.forEach(name => {
  console.log(name);
});


console.log("\nFood Types:");
foodTypes.forEach(food => {
  console.log(food);
});


console.log("\nStates Info:");
statesInfo.forEach(state => {
  console.log(state);
});