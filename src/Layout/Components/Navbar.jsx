import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
	const [close, setClose] = useState(true);

	return (
		<nav className="navbar bg-transparent z-30 top-0 left-0 text-base-100 ">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-circle bg-slate-300 hover:bg-yellow-500 text-blue-900 lg:hidden"
						onClick={() => setClose(!close)} // Toggle the state here
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 "
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					{/* Use the state to show or hide the dropdown */}
					{!close && (
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-blue-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<a>Location</a>
								<ul className="p-2 bg-blue-900">
									<li>
										<Link href="/">Location 1</Link>
									</li>
									<li>
										<Link href="/">Location 2</Link>
									</li>
									<li>
										<Link href="/">Location 2</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/Faq">FAQ</Link>
							</li>
							<li>
								<Link href="/Join">Join The Team</Link>
							</li>
							<li>
								<Link href="/Contact">Contact</Link>
							</li>
						</ul>
					)}
				</div>
				<Link
					className="btn btn-ghost text-pretty text-black border-dashed border-blue-950
				 text-xl"
					href="/"
				>
					TexusWash
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<details>
							<summary>Location</summary>
							<ul className="p-2 bg-blue-900">
								<li>
									<Link href="/">Location 1</Link>
								</li>
								<li>
									<Link href="/">Location 2</Link>
								</li>
								<li>
									<Link href="/">Location 2</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link href="/Faq">FAQ</Link>
					</li>
					<li>
						<Link href="/Join">Join The Team</Link>
					</li>
					<li>
						<Link href="/Contact">Contact</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn">Login</a>
			</div>
		</nav>
	);
};

export default Navbar;
