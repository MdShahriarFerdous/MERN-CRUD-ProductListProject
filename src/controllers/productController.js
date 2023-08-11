const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
	try {
		const { name, code, unitPrice, totalPrice, quantity } = req.body;

		if (!name.trim()) {
			return res.status(400).json({ error: "Name is required" });
		}
		if (!code.trim()) {
			return res.status(400).json({ error: "Code is required" });
		}
		if (!unitPrice) {
			return res.status(400).json({ error: "Unit price is required" });
		}
		if (!totalPrice) {
			return res.status(400).json({ error: "Total price is required" });
		}
		if (!quantity) {
			return res.status(400).json({ error: "Quantity is required" });
		}

		const newProduct = await new Product({
			...req.body,
		}).save();
		res.json(newProduct);
	} catch (error) {
		return res.status(400).json(error.message);
	}
};
exports.findProduct = async (req, res) => {
	try {
		const allProducts = await Product.find({}).sort({ createdAt: "-1" });
		if (!allProducts) {
			return res.json({ status: "Not Found" });
		} else {
			res.json(allProducts);
		}
	} catch (error) {
		return res.json(error.message);
	}
};
exports.updateProduct = async (req, res) => {
	try {
		const { name, code, unitPrice, totalPrice, quantity } = req.body;
		if (!name.trim()) {
			return res.status(400).json({ error: "Name is required" });
		}
		if (!code.trim()) {
			return res.status(400).json({ error: "Code is required" });
		}
		if (!unitPrice) {
			return res.status(400).json({ error: "Unit price is required" });
		}
		if (!totalPrice) {
			return res.status(400).json({ error: "Total price is required" });
		}
		if (!quantity) {
			return res.status(400).json({ error: "Quantity is required" });
		}
		const productUpdate = await Product.findByIdAndUpdate(
			req.params.id,
			{ ...req.body },
			{ new: true }
		);
		res.json(productUpdate);
	} catch (error) {
		return res.json(error.message);
	}
};
exports.deleteProduct = async (req, res) => {
	try {
		const productDelete = await Product.findByIdAndDelete(req.params.id);
		res.json({ deletedProduct: productDelete });
	} catch (error) {
		return res.json(error.message);
	}
};
