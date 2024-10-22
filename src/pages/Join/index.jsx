import React from "react";
import { FaStar } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Join = () => {
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
		<div>
			<h2 className="text-6xl flex flex-row justify-center items-center text-center my-2 font-bold  text-white">
				<FaStar className="text-yellow-300 text-3xl" />
				<FaStar className="text-yellow-300 text-3xl" />
				<FaStar className="text-yellow-300 text-3xl" />
				<FaStar className="text-yellow-300 text-3xl" />
				<p className="mx-2">Join the Team</p>
				<FaStar className="text-yellow-300 text-3xl" />
				<FaStar className="text-yellow-300 text-3xl" />
				<FaStar className="text-yellow-300 text-3xl" />
			</h2>
			<div className="flex flex-col py-4 items-center  justify-center ">
				<div>
					<p className="text-2xl xl:w-[700px] sm:w-fit text-wrap my-3 text-center font-bold  px-3 text-slate-300">
						Texas Express Wash is seeking self-motivated individuals with a
						passion for providing the best possible experience for our
						customers. If that's you, we want to meet you!
					</p>
				</div>

				<div>
					<div className="flex justify-center max-w-3xl items-center min-h-screen mt-8 bg-blue-600 rounded-3xl">
						<div className="w-full max-w-3xl rounded-3xl p-8 border-4 border-gray-500  bg-blue-600">
							<h2 className="text-2xl text-slate-300 font-bold mb-6">Join Application Form</h2>
							<form onSubmit={handleSubmit(onSubmit)}>
								{/* Name Fields */}
								<div className="mb-4">
									<label className="block text-slate-300">Name*</label>
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

								{/* Cell Phone */}
								<div className="mb-4">
									<label className="block text-slate-300">Cell Phone*</label>
									<input
										className={`input input-bordered w-full ${
											errors.phone && "border-red-500"
										}`}
										type="tel"
										placeholder="Cell Phone"
										{...register("phone", { required: true })}
									/>
									{errors.phone && (
										<p className="text-red-500">Cell Phone is required</p>
									)}
								</div>

								{/* Email */}
								<div className="mb-4">
									<label className="block text-slate-300">Email*</label>
									<input
										className={`input input-bordered w-full ${
											errors.email && "border-red-500"
										}`}
										type="email"
										placeholder="Email"
										{...register("email", { required: true })}
									/>
									{errors.email && (
										<p className="text-red-500">Email is required</p>
									)}
								</div>

								{/* Desired Position */}
								<div className="mb-4">
									<label className="block text-slate-300">
										Desired Position*
									</label>
									<input
										className={`input input-bordered w-full ${
											errors.position && "border-red-500"
										}`}
										type="text"
										placeholder="Desired Position"
										{...register("position", { required: true })}
									/>
									{errors.position && (
										<p className="text-red-500">Desired Position is required</p>
									)}
								</div>

								{/* Location */}
								<div className="mb-4">
									<label className="block text-slate-300">
										Location(s) You Are Interested In*
									</label>
									<select
										className={`select select-bordered w-full ${
											errors.location && "border-red-500"
										}`}
										{...register("location", { required: true })}
									>
										<option value="">Select All</option>
										<option value="Eldridge Parkway">Eldridge Parkway</option>
										<option value="FM 2920">FM 2920</option>
										<option value="Tidwell Road">Tidwell Road</option>
									</select>
									{errors.location && (
										<p className="text-red-500">Please select a location</p>
									)}
								</div>

								{/* Resume Upload */}
								<div className="mb-4">
									<label className="block text-slate-300">
										Upload Your Resume*
									</label>
									<input
										type="file"
										accept=".pdf"
										className={`input input-bordered w-full ${
											errors.resume && "border-red-500"
										}`}
										{...register("resume", { required: true })}
									/>
									{errors.resume && (
										<p className="text-red-500">
											Please upload your resume in PDF format
										</p>
									)}
									<p className="text-slate-100 text-sm">
										Accepted file types: PDF, Max. file size: 128MB
									</p>
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
				</div>
			</div>
		</div>
	);
};

export default Join;
