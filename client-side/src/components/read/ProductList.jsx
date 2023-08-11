import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	deleteProduct,
	findProduct,
} from "../../backend-services/productServices";
import FullScreenLoader from "./../navbar/FullScreenLoader";
import "./productlist.css";
import { Link } from "react-router-dom";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [id, setId] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const productsData = await findProduct();
				setProducts(productsData);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};
		fetchData();
	}, [id]);

	const handleClick = async (id) => {
		await deleteProduct(id);
		setId(id);
		toast.success("Item Deleted");
	};

	if (products.length > 0) {
		return (
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="card list-card">
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>Image</th>
											<th>Product Name</th>
											<th>Product Code</th>
											<th>Unit Price</th>
											<th>Qty</th>
											<th>Total Price</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{products.map((product, index) => {
											const {
												_id,
												name,
												code,
												image,
												unitPrice,
												totalPrice,
												quantity,
											} = product;
											return (
												<tr key={index + 1}>
													<td>
														<img
															className="w-25"
															src={image}
															alt="product-image"
														/>
													</td>
													<td>{name}</td>
													<td>{code}</td>
													<td>{unitPrice}</td>
													<td>{quantity}</td>
													<td>{totalPrice}</td>
													<td>
														<Link
															to={`/update/${_id}`}
															state={{
																_id,
																name,
																code,
																unitPrice,
																quantity,
																totalPrice,
																image,
															}}
														>
															<button className="btn btn-success btn-sm mx-1">
																Edit
															</button>
														</Link>

														<button
															className="btn btn-danger btn-sm mx-1"
															onClick={() => {
																handleClick(
																	_id
																);
															}}
														>
															Delete
														</button>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<ToastContainer />
			</div>
		);
	} else {
		return <FullScreenLoader />;
	}
};

export default ProductList;
