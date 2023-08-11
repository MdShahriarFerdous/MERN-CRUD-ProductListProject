import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, number, string } from "yup";
import { updateProduct } from "../backend-services/productServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FullScreenLoader from "../components/navbar/FullScreenLoader";
import "../components/create/form.css";

const UpdatePage = () => {
	const [isCreated, setIsCreated] = useState(false);
	const navigate = useNavigate();

	const location = useLocation();
	// console.log(location);
	const { _id, name, code, unitPrice, quantity, totalPrice, image } =
		location.state;

	const formik = useFormik({
		initialValues: {
			name: name,
			code: code,
			image: image,
			unitPrice: unitPrice,
			totalPrice: totalPrice,
			quantity: quantity,
		},

		validationSchema: object({
			name: string()
				.required()
				.trim()
				.min(6, "Minimum be 6 characters long"),
			code: string().trim().required(),
			image: string().required(),
			unitPrice: number().required(),
			totalPrice: number().required(),
			quantity: number().required(),
		}),

		onSubmit: async (values, { resetForm }) => {
			setIsCreated(true);
			try {
				await updateProduct(_id, values);
				// console.log(updatedProduct);
				toast.success("Data Updated");

				resetForm({
					values: {
						name: "",
						code: "",
						image: "",
						unitPrice: "",
						totalPrice: "",
						quantity: "",
					},
				});
			} catch (error) {
				toast.error("Failed to update!");
			} finally {
				setIsCreated(false);
				navigate("/");
			}
		},
	});
	return (
		<>
			<div className="container card shadow-sm p-4 my-5">
				<h1 className="card-title mt-3 mb-5">Update Product</h1>
				<form onSubmit={formik.handleSubmit}>
					<div className="row g-3">
						<div className="col-lg-4 p-3">
							<label className="mb-2">Product Name</label>
							<input
								type="text"
								className="form-control p-3"
								placeholder="Product Name"
								name="name"
								value={formik.values.name}
								onChange={formik.handleChange}
							/>
							{formik.touched.name && formik.errors.name && (
								<span className="text-danger m-2">
									{formik.errors.name}
								</span>
							)}
						</div>
						<div className="col-lg-4 p-3">
							<label className="mb-2">Product Code</label>
							<input
								type="text"
								className="form-control p-3"
								placeholder="Product Code"
								name="code"
								value={formik.values.code}
								onChange={formik.handleChange}
							/>
							{formik.touched.code && formik.errors.code && (
								<span className="text-danger m-2">
									{formik.errors.code}
								</span>
							)}
						</div>
						<div className="col-lg-4 p-3">
							<label className="mb-2">Product Image</label>
							<input
								type="text"
								className="form-control p-3"
								placeholder="Product Image"
								name="image"
								value={formik.values.image}
								onChange={formik.handleChange}
							/>
							{formik.touched.image && formik.errors.image && (
								<span className="text-danger m-2">
									{formik.errors.image}
								</span>
							)}
						</div>
						<div className="col-lg-4 p-3">
							<label className="mb-2">Unit Price</label>
							<input
								type="text"
								className="form-control p-3"
								placeholder="Unit Price"
								name="unitPrice"
								value={formik.values.unitPrice}
								onChange={formik.handleChange}
							/>
							{formik.touched.unitPrice &&
								formik.errors.unitPrice && (
									<span className="text-danger m-2">
										{formik.errors.unitPrice}
									</span>
								)}
						</div>
						<div className="col-lg-4 p-3">
							<label className="mb-2">Quantity</label>
							<input
								type="text"
								className="form-control p-3"
								placeholder="Quantity"
								name="quantity"
								value={formik.values.quantity}
								onChange={formik.handleChange}
							/>
							{formik.touched.quantity &&
								formik.errors.quantity && (
									<span className="text-danger m-2 ">
										{formik.errors.quantity}
									</span>
								)}
						</div>
						<div className="col-lg-4 p-3">
							<label className="mb-2">Total Price</label>
							<input
								type="text"
								className="form-control p-3"
								placeholder="Total Price"
								name="totalPrice"
								value={formik.values.totalPrice}
								onChange={formik.handleChange}
							/>
							{formik.touched.totalPrice &&
								formik.errors.totalPrice && (
									<span className="text-danger m-2">
										{formik.errors.totalPrice}
									</span>
								)}
						</div>
						<div className="col-lg-4 p-3">
							<button
								type="submit"
								className="btn btn-primary btn-lg submit-button shadow-sm"
							>
								Update
							</button>
						</div>
					</div>
				</form>
				<ToastContainer />
			</div>
			<div style={{ display: isCreated ? "block" : "none" }}>
				<FullScreenLoader />
			</div>
		</>
	);
};

export default UpdatePage;
