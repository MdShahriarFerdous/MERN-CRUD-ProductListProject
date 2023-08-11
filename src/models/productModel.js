const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			maxLength: 100,
		},
		code: {
			type: String,
			required: true,
			trim: true,
		},
		image: {
			type: String,
		},
		unitPrice: {
			type: Number,
			trim: true,
			required: true,
		},
		totalPrice: {
			type: Number,
			trim: true,
			required: true,
		},
		quantity: {
			type: Number,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
