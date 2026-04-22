import fs from "fs";

const getProducts = () => {
  const products = fs.readFileSync("data/product.json", "utf8");
  return JSON.parse(products);
};

const productList = () => {
  fs.writeFileSync("data/images.txt", "Hello Java Script");
  const result = fs.readFileSync("data/images.txt", "utf8");
  return result;
};

const productContract = () => {
  const data = {
    name: "Jhon",
    age: 25,
    status: "active",
  };

  fs.writeFileSync("data/user.json", JSON.stringify(data, null, 2));
  const contractResult = fs.readFileSync("data/user.json", "utf8");
  return JSON.parse(contractResult);
};

//Request Data (Request Params) Fetch Data From ID
const getProductById = (id) => {
  const products = fs.readFileSync("data/product.json", "utf8");
  const data = JSON.parse(products);
  return data.find((item) => item.id == id);
};

//Request Query Params

export default { getProducts, productList, productContract, getProductById };
