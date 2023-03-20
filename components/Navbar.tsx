/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit";
import makeBlockie from "ethereum-blockies-base64";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const { address } = useAccount();

	const [theme, setTheme] = useState("light");
	useEffect(() => {
		const root = window.document.documentElement;
		if (theme === "dark") {
			root.classList.remove("light");
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
			root.classList.add("light");
		}
	}, [theme]);

	return (
		<div>
			<nav className="w-full dark:bg-black border-b-2 border-pink-500">
				<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block">
							<Link href="/" legacyBehavior>
								<a className="group text-pink-500 dark:text-white">
									<span className="text-xl md:text-3xl font-bold duration-500 hover:text-gray-700 dark:hover:text-pink-500">
										zk-ΞPoSDAO
									</span>
									<br />
									<span className="text-md">
										Token-gated DAO
									</span>
								</a>
							</Link>

							<div className="md:hidden">
								<button
									className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-gray-800 dark:text-white"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-gray-800 dark:text-white"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? "block" : "hidden"
							}`}
						>
							<ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
								{/* <li>
									<Link
										href="/organisation_dashboard"
										legacyBehavior
									>
										<a
											onClick={() => setNavbar(!navbar)}
											className="text-lg md:text-xl font-semibold group text-white hover:text-sky-500 transition-all duration-500"
										>
											Dashboard
											<span className="block max-w-0 group-hover:max-w-xs transition-all duration-500 h-1 bg-sky-500"></span>
										</a>
									</Link>
						</li> */}
								<li>
									<img
										src="/icons8-ethereum.svg"
										className="border-2 rounded-full h-12 w-12 p-1 border-pink-500"
									/>
								</li>
								<li>
									<ConnectButton
										showBalance={false}
										chainStatus={"icon"}
									/>
								</li>
								{/* <li>
									<Link href="/profile" legacyBehavior>
										<a onClick={() => setNavbar(!navbar)}>
											<div className="rounded-2xl">
												<img
													src={makeBlockie(
														address ||
															"0x00000000000000"
													)}
													alt="blockie"
													className="h-12 rounded-full cursor-pointer"
												/>
											</div>
										</a>
									</Link>
								</li> */}
								<li>
									<label
										htmlFor="red-toggle"
										className="inline-flex relative items-center mr-5 cursor-pointer"
									>
										<input
											type="checkbox"
											value=""
											id="red-toggle"
											className="sr-only peer"
										/>
										<div
											className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-800 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-300"
											onClick={() => {
												theme === "dark"
													? setTheme("light")
													: setTheme("dark");
											}}
										></div>
									</label>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;
