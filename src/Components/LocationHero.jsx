import React from "react";

const LocationHero = () => {
	const cards = ["Eldridge Pkwy", " FM 2920", " Tidwell Rd"];
	return (
		<div className="flex flex-col justify-center items-center pb-6 ">
			<h3 className="font-semibold text-center text-md pb-3">
				Eldridge Pkwy FM 2920 Tidwell Rd
			</h3>
			<h2 className="font-bold text-center text-4xl pb-5 ">
				3 Car Wash Locations in Northwest Houston
			</h2>
			<div className="flex 2xl:flex-row xl:flex-row gap-4 sm:flex-col ">
				{cards.map((location, key) => (
					<div
						key={key}
						className="card w-96 my-12 border-solid border-white
                     border-4 rounded-2xl shadow-xl"
					>
						<div className="card-body rounded-2xl m-1 text-center bg-yellow-500">
							<h2 className="text-center  font-bold text-4xl text-blue-900">
								{location}
							</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LocationHero;
