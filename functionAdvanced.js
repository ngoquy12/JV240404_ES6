const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// forEach: Không cần biết số lần lặp, không dùng được break, return và continue
numbers.forEach((number, index, array) => {
  console.log("Number: ", number, " Index: ", index, +" Array: ", array);
});

// find()
// Yêu cầu: Tìm kiếm trong mảng có phần tử  = 1? Nếu có sẽ trả về phần tử đó, nếu không trả về null
// const findNumber = (array, item) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//       return array[i];
//     }
//   }

//   return null;
// };

const findNumber = numbers.find((number) => number === 10);

// findIndex()

const findIndexNumber = numbers.findIndex((number) => number === 8);
// console.log("Vị trí của phần tử 8 là: ", findIndexNumber);

// filter()
const filterNumber = numbers.filter((number) => number === 8);
console.log(filterNumber);

// map()
const newArray = numbers.map((number) => `0${number}`);

const products = [
  {
    id: 1,
    name: "Cam",
  },
  {
    id: 2,
    name: "Táo",
  },
];

const productHtml = products.map((product) => {
  return `
        <li>Id: ${product.id}</li>
        <li>Name: ${product.name}</li>
    `;
});

// Chuyển đổi mảng thành chuỗi
const productConvert = productHtml.join("");

const listProduct = document.querySelector(".list-product");
listProduct.innerHTML = productConvert;

// Chuyển đổi mảng product với tên thành quyết
const converName = products.map((product) => {
  return {
    id: product.id,
    name: "Quýt",
  };
});

console.log("converName: ", converName);
