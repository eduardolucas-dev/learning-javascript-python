const fs = require("fs");

const users = [
  {
    id: 1,
    name: "Julia",
    age: 20,
    email: "julia010@email.com",
    active: true
  },
  {
    id: 2,
    name: "Ronaldo",
    age: 25,
    email: "ronaldo7@email.com",
    active: true
  },
  {
    id: 3,
    name: "Lucas",
    age: 18,
    email: "lucas10@email.com",
    active: true
  }
];

const jsonData = JSON.stringify(users, null, 2);

fs.writeFileSync("users.json", jsonData);

console.log("JSON created successfully!");
