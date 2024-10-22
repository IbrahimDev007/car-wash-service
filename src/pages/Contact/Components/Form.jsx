import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InquiryForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to submit the form");
			}

			toast.success("Form submitted successfully!");
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	return (
		<div className="flex justify-center items-center  rounded-3xl min-h-screen bg-blue-900 px-4">
			<div className="w-full max-w-lg p-8 border-4 rounded-3xl border-gray-500  bg-blue-600">
         
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* Inquiry Type */}
					<div className="mb-4">
						<label className="block text-white">I have a...(Required)</label>
						<select
							className={`select select-bordered w-full ${
								errors.inquiryType && "border-red-500"
							}`}
							{...register("inquiryType", { required: true })}
						>
							<option value="">Select an option</option>
							<option value="General Inquiry">
								General Inquiry or Message
							</option>
							<option value="Location Question">
								Question, comment, or issue relating to a specific location
							</option>
							<option value="Fleet Plan">Fleet Plan inquiry</option>
						</select>
						{errors.inquiryType && (
							<p className="text-red-500">Please select an option</p>
						)}
					</div>

					{/* Location Field */}
					<div className="mb-4">
						<label className="block text-white">
							Which location is this regarding? (Required)
						</label>
						<select
							className={`select select-bordered w-full ${
								errors.location && "border-red-500"
							}`}
							{...register("location", { required: true })}
						>
							<option value="">Select a location</option>
							<option value="Eldridge Parkway">Eldridge Parkway</option>
							<option value="FM 2920">FM 2920</option>
							<option value="Tidwell Road">Tidwell Road</option>
						</select>
						{errors.location && (
							<p className="text-red-500">Please select a location</p>
						)}
					</div>

					{/* Name Fields */}
					<div className="mb-4">
						<label className="block text-white">Name (Required)</label>
						<div className="flex space-x-2">
							<input
								className={`input input-bordered w-full ${
									errors.firstName && "border-red-500"
								}`}
								type="text"
								placeholder="First"
								{...register("firstName", { required: true })}
							/>
							<input
								className={`input input-bordered w-full ${
									errors.lastName && "border-red-500"
								}`}
								type="text"
								placeholder="Last"
								{...register("lastName", { required: true })}
							/>
						</div>
						{errors.firstName && (
							<p className="text-red-500">First name is required</p>
						)}
						{errors.lastName && (
							<p className="text-red-500">Last name is required</p>
						)}
					</div>

					{/* Phone */}
					<div className="mb-4">
						<label className="block text-white">Phone (Required)</label>
						<input
							className={`input input-bordered w-full ${
								errors.phone && "border-red-500"
							}`}
							type="tel"
							placeholder="Phone"
							{...register("phone", { required: true })}
						/>
						{errors.phone && <p className="text-red-500">Phone is required</p>}
					</div>

					{/* Email */}
					<div className="mb-4">
						<label className="block text-white">Email (Required)</label>
						<input
							className={`input input-bordered w-full ${
								errors.email && "border-red-500"
							}`}
							type="email"
							placeholder="Email"
							{...register("email", { required: true })}
						/>
						{errors.email && <p className="text-red-500">Email is required</p>}
					</div>

					{/* Message */}
					<div className="mb-4">
						<label className="block text-white">Message (Required)</label>
						<textarea
							className={`textarea textarea-bordered w-full ${
								errors.message && "border-red-500"
							}`}
							placeholder="Your message..."
							{...register("message", { required: true })}
						></textarea>
						{errors.message && (
							<p className="text-red-500">Message is required</p>
						)}
					</div>

					{/* Submit Button */}
					<div className="flex justify-center">
						<button type="submit" className="btn btn-error bg-red-700 text-white w-full">
							Submit
						</button>
					</div>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default InquiryForm;
