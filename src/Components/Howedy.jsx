import React from "react";
import { FaCarCrash } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { FaBrush } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
const Howedy = () => {
	const cards = [
		{
			icon: (
				<FaCarCrash className=" text-slate-200 text-opacity-80  text-9xl" />
			),
			name: "Top Notch Gear",
			desc: "Y’all are going to love our top-notch gear that gets your ride spick and span in no time, all without a scratch.",
		},
		{
			icon: (
				<FaHandsClapping className=" text-slate-200 text-opacity-80  text-9xl" />
			),
			name: "Heaps of Free Perks!",
			desc: (
				<ul>
					{[
						"Seriously Strong Vacuums",
						"Mat Cleaners",
						"Clean Towels",
						"Air Wands",
					].map((item, key) => (
						<li key={key} className="p-0 m-0  flex flex-row gap-2">
							<FaCircleCheck className=" text-3xl bg-transparent p text-slate-50" />
							{item}
						</li>
					))}
				</ul>
			),
		},
		{
			icon: (
				<FaBrush className=" text-slate-200 text-opacity-80  text-center text-9xl" />
			),
			name: "Lookin’ for a Deeper Clean?",
			desc: "All of our locations offer interior and exterior detail services that’ll knock your socks off!",
		},
	];

	return (
		<div className="flex flex-col justify-center items-center text-center pb-5">
			<h1 className="text-9xl my-4 font-extrabold text-opacity-45 text-slate-300">
				-Howdy!-
			</h1>
			<h2 className="text-center font-bold text-3xl py-9 ">
				Here at Texas Express, we’re a proud Texas-grown, family-owned and
				operated express <br />
				carwash and detail brand, bringing you top-notch service, every single
				time.
			</h2>
			<div className="flex pt-4  justify-center items-center  xl:flex-row sm:flex-col md:flex-col">
				{cards.map((info, key) => (
					<div key={key} className="card w-96 flex flex-col bg-inherit">
						<h1 className=" flex flex-col justify-center items-center text-center">
							{info.icon}
						</h1>
						<h1 className="text-center  text-5xl text-yellow-500 font-bold py-3">
							{info.name}
						</h1>
						<h3 className="pt-2 card-body font-semibold text-white text-2xl">
							{info.desc}
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Howedy;
