import React from "react";
import { FaStar } from "react-icons/fa";
const Faq = () => {
	const accordian = [
		{
			title: "Why should I get an unlimited membership?",
			content:
				"With our unlimited membership, keepin’ your ride lookin’ clean and shiny has never been easier!<br/>Wash your vehicle as often as you like for one low monthly price, and take advantage of all our free perks—like free vacuums, microfiber towels, mat cleaners and more.<br />Find a spot near you right here!",
		},
		{
			title: "How do I pay for it?",
			content:
				"When you sign up, your first month's membership fee is paid by credit card that day. After that, we’ll charge that card on the same day each month for as long as you have your wash membership.",
		},
		{
			title: "Why should I get an unlimited membership?",
			content:
				"With our unlimited membership, keepin’ your ride lookin’ clean and shiny has never been easier!Wash your vehicle as often as you like for one low monthly price, and take advantage of all our free perks—like free vacuums, microfiber towels, mat cleaners and more.Find a spot near you right here!",
		},
		{
			title: "How do I pay for it?",
			content:
				"When you sign up, your first month's membership fee is paid by credit card that day. After that, we’ll charge that card on the same day each month for as long as you have your wash membership.",
		},
	];

	return (
		<>
			 <h2 className="text-6xl flex flex-row justify-center items-center text-center my-2 font-bold  text-white">
				<FaStar className="text-yellow-300 text-3xl"/>
				<FaStar className="text-yellow-300 text-3xl"/>
				<FaStar className="text-yellow-300 text-3xl"/>
				
				<p className="mx-2">Faq</p>
				<FaStar className="text-yellow-300 text-3xl"/>
				<FaStar className="text-yellow-300 text-3xl"/>
				<FaStar className="text-yellow-300 text-3xl"/>
				</h2>
			<div>
				<div className="flex flex-row py-10 justify-between">
					<div>
						<h1 className="text-9xl my-4 font-extrabold text-opacity-45 px-3 text-slate-300">
							-Howdy!-
						</h1>
					</div>

					<div className=" card w-[500px] gap-2 px-6 flex flex-col justify-center items-center text-start ">
						{accordian.map((accordian, keys) => (
							<div className="bg-blue-600 collapse collapse-arrow">
								<input type="checkbox" className="peer" />
								<div className="collapse-title bg-blue-800 text-base-100 peer-checked:bg-blue-800 peer-checked:text-white ">
									{accordian.title}
								</div>
								<div className="collapse-content  bg-blue-800 text-base-100 peer-checked:bg-amber-400 peer-checked:text-white">
									<p className=" py-3 ">{accordian.content}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Faq;
