import React from "react";
import { FaStar } from "react-icons/fa";
import InquiryForm from "./Components/Form";

const Contact = () => {
	return (
		<div className="">
			<h2 className="text-6xl flex flex-row justify-center items-center text-center my-2 font-bold  text-white">
				<FaStar className="text-yellow-300 text-3xl" />
				<FaStar className="text-yellow-300 text-3xl" />
				<FaStar className="text-yellow-300 text-3xl" />
				<p className="mx-4">Contact</p>
				<FaStar className="text-yellow-300 text-3xl" />
				<FaStar className="text-yellow-300 text-3xl" />
				<FaStar className="text-yellow-300 text-3xl" />
			</h2>
			<div className="flex flex-row justify-between gap-3 items-start py-3">
				<div>
					<div className="flex card flex-col py-2 px-3 gap-4  ">
						<h2 className="font-bold card-title mx-4 px-4 text-4xl mb-4 text-white text-start">
							Texas Car Wash
						</h2>
						<div className="card-body text-teal-50 text-start">
							<p className="text-bold text-2xl">All Locations Open Daily</p>
							<p className="text-xl">
								Monday-Saturday: 7:30 am - 7:00 pm <br />
								Sunday: 9:00 am - 5:00 pm
							</p>
							<p className="text-lg text-start py-3 ">
								Car wash may close early due to weather or mechanical issues.
							</p>
						</div>
					</div>
					<div className="flex card flex-col py-2 px-3 gap-4 items-center justify-center ">
						<h2 className="font-bold card-title text-4xl mb-8 text-white text-center">
							Change My Wash Plan
						</h2>
					</div>
				</div>

				<div>
					<h2 className="font-bold text-4xl mb-8 text-white text-center">
						How Can We Help You
					</h2>
					<InquiryForm />
				</div>
			</div>
		</div>
	);
};

export default Contact;
