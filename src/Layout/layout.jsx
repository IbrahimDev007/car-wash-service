import Footer from "@/Layout/Components/Footer";
import Navbar from "@/Layout/Components/Navbar";
import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-blue-900">
			{/* Header Section */}
			<header className="relative">
				{/* Wave Background */}
				<div className=" inset-0 z-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 200"
						className="w-full"
					>
						<path
							fill="#C53030"
							fillOpacity="40"
							d="M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,160C672,139,768,85,864,101.3C960,117,1056,203,1152,208C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
						/>
					</svg>
					{/* Navbar */}
				</div>
				<div className="absoulate top-0  z-10">
					<Navbar />
				</div>
			</header>

			{/* Main Content */}
			<main className="flex-grow container ">{children}</main>

			{/* Footer */}
			<footer className=" ">
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
