import react from "react";
import Howedy from "@/Components/Howedy";
import LocationHero from "@/Components/LocationHero";
const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-full py-8 text-white">
			<LocationHero className="mt-3" />
			<Howedy />
		</div>
	);
};
export default Home;