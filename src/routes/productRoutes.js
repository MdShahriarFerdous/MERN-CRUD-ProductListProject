const express = require("express");
const router = express.Router();
const {
	createProduct,
	findProduct,
	updateProduct,
	deleteProduct,
} = require("../controllers/productController");

router.post("/create-product", createProduct); //create
router.get("/all-products", findProduct); //read/find
router.put("/update-product/:id", updateProduct); //update
router.delete("/delete-product/:id", deleteProduct); //delete

module.exports = router;
