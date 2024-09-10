// var, let, const

import * as formatData from "./common.js";

var userName = "Nguyễn Văn A";

var userName = "Nguyễn Văn B"; // Khai báo lại

userName = "Nguyễn Văn C";

console.log("User name: ", userName);

let company = "Rikkei Academy";
company = "Rikkei Education";
console.log("Company: ", company);

// const address = "Hà Nội";

// console.log("Address: ", address);

// Arrow function
// Declation function có cơ chế hosting, nếu hai hàm trùng tên nhau thì nó sẽ lấy hàm được khai báo sau để thực thi
// function getName(userName) {
//   console.log("UserName: ", userName);
// }

// function getName(userName) {
//   console.log("UserName 1: ", userName);
// }

const getName = (userName) => {
  console.log("UserName: ", userName);
};

// getName("Nguyễn Văn A");

const fisrtArray = [1, 2, 3];

const secondArray = [4, 5, 6];

const mergeArray = [...fisrtArray, ...secondArray]; // [1,2,3,4,5,6]

const obj1 = {
  userName: "Nguyễn Văn A",
  age: 20,
};

const mergeObj = { ...obj1, address: "hà Nội" };

console.log("mergeObj: ", mergeObj);

// Destructuring
const colors = ["red", "green", "blue"];

// Destructuring với mảng
const [fisrtColor, secondColor, thirdColor] = colors;

console.log("First color: ", fisrtColor);
console.log("Second color: ", secondColor);
console.log("Third color: ", thirdColor);

const userInfo = {
  useName: "Đức Anh",
  age: 20,
  address: "Hà Nội",
};

// Destructuring với đôi tượng
const { useName, age, address } = userInfo;

console.log("Name: ", useName);
console.log("Age: ", age);
console.log("Address: ", address);

// Rest parameter
const studentNames = ["Nam", "Tâm", "Phúc"];

const [fisrtName, secondName, thirdName, ...rest] = studentNames;

console.log("fisrtName: ", fisrtName);
console.log("secondName: ", secondName);
console.log("thirdName: ", thirdName);
console.log("rest: ", rest);

// Rest parameter với function
const sum = (...restParams) => {
  console.log(restParams); //  [10, 20, 30, 40, 50, 60]
};

sum(10, 20, 30, 40, 50, 60);

// Default parameter
const logger = (type = "log") => {
  console.log(type);
};

const fullName = formatName("Nguyễn Văn", "Nam");
console.log("FullName: ", fullName);

formatData.formatName();

/**
 * Hàm tính tổng hai số nguyên
 * @param {*} a Số nguyên thứ nhất
 * @param {*} b Số nguyên thứ hai
 * @returns Tổng của hai số nguyên
 * Auth: NVQUY (10/09/2024)
 * UpdateBy:
 */
const sum1 = (a, b) => {
  return a + b;
};
