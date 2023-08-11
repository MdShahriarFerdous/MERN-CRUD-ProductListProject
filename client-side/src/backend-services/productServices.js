import axios from "axios";

import {
	CREATE_PRODUCT_URL,
	FIND_PRODUCT_URL,
	UPDATE_PRODUCT_URL,
	DELETE_PRODUCT_URL,
} from "./apiEndpoints";

//Create new Product
export const createProduct = async (productData) => {
	try {
		const response = await axios.post(CREATE_PRODUCT_URL, productData);
		return response.data;
	} catch (error) {
		console.error("Error creating product:", error.message);
		throw error;
	}
};

//Read or Find all Products
export const findProduct = async () => {
	try {
		const response = await axios.get(FIND_PRODUCT_URL);
		return response.data;
	} catch (error) {
		console.error("Error finding products:", error.message);
		throw error;
	}
};

//Update Product
export const updateProduct = async (productId, productData) => {
	try {
		const response = await axios.put(
			`${UPDATE_PRODUCT_URL}/${productId}`,
			productData
		);
		return response.data;
	} catch (error) {
		console.error("Error updating product:", error.message);
		throw error;
	}
};

//Delete Product
export const deleteProduct = async (productId) => {
	try {
		const response = await axios.delete(
			`${DELETE_PRODUCT_URL}/${productId}`
		);
		return response.data;
	} catch (error) {
		console.error("Error deleting product:", error.message);
		throw error;
	}
};
