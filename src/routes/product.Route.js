import express from "express"; // Import Express
import productController from "../controllers/product.Controller.js";
const router = express.Router(); // Router use

router.get("/api/products", productController.getProduct);

router.get("/api/productList", productController.getListProduct);

router.get("/api/userList", productController.productContract);

//Dynamic Routes
router.get("/api/getOneProduct/:id", productController.getProductById);

export default router; // to use this router in controller
// After Finished this Much you have import this file from the app.js to use
