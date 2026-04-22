import productServices from "../services/product.Service.js";

const getProduct = (req, res) => {
  const data = productServices.getProducts();
  res.json(data);
};

const getListProduct = (req, res) => {
  const dataTwo = productServices.productList();
  res.json(dataTwo);
};

const productContract = (req, res) => {
  const contractProduct = productServices.productContract();
  res.json(contractProduct);
};

//Request Params
const getProductById = (req, res) => {
  const id = req.params.id;
  const dataOne = productServices.getProductById(id);
  if (!dataOne) return res.status(404).send("Product Not Found");
  res.json(dataOne);
};
export default { getProduct, getListProduct, productContract, getProductById }; // to Export multiple we putting this in object this file will export in routes routes will import the file

//Control must bring data always from product.services.js
