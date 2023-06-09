import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="mt-20">
				<div>
					<div className="flex justify-center items-center">
						{/* <span>
							<img
								src="icons8-ethereum.svg"
								className="h-36 w-36"
							/>
						</span> */}
						<div className="text-center">
							<h1 className="text-pink-500 font-bold text-8xl hover:cursor-pointer">
								zk-ΞPoSDAO
							</h1>
							<p className="text-gray-500 dark:text-white text-xl mt-2">
								Token-gated DAO using
							</p>
							<p className="text-gray-500 dark:text-white text-xl">
								Proof Of Stake: Pages on Scroll L2
							</p>
						</div>
					</div>
				</div>

				<div className="mt-10 pb-20">
					<h1 className="text-gray-600 dark:text-white text-center font-semibold text-5xl">
						Proof of Stake: Pages (SBT) Contributors
					</h1>

					<div className="mt-5 px-28">
						<label
							htmlFor="large-input"
							className="block mb-2 text-xl font-medium dark:text-white text-gray-500"
						>
							Are you a contributor of Proof of Stake: Pages?
						</label>
						<input
							type="text"
							id="large-input"
							className="block w-full p-4 text-gray-500 dark:text-white border-2 border-pink-500 rounded-lg dark:bg-black bg-pink-50 sm:text-md focus:ring-pink-800 focus:border-pink-800"
							// onChange={(e) => setOrgName(e.target.value)}
							placeholder="Search by Ethereum address"
						/>
					</div>

					<div className="mt-10 text-gray-500 dark:text-gray-400 text-center text-xl">
						<p className="">
							Traditional DAOs face issues such as low voter
							turnout, voter apathy, and governance
							centralization.
						</p>
						<p className="">
							Existing token-gated DAOs have limited functionality
							and are vulnerable to voter collusion.
						</p>
						<p>
							The solution? A token-gated DAO using Proof of Stake
							Pages on Scroll L2.
						</p>
					</div>

					<div className="mt-5 text-gray-500 dark:text-gray-400 text-center text-xl">
						<p className="">
							The zk-ΞPoSDAO leverages the power of zkSNARKs to
							create a transparent and secure DAO.
						</p>
						<p className="">
							The Proof of Stake Pages token (SBT) acts as a
							gatekeeper, ensuring only token holders can
							participate in governance.
						</p>
						<p>
							The DAO operates on Scroll L2, providing low gas
							fees and fast transactions.
						</p>
						<p>
							The DAO&apos;s governance process involves staking
							SBT to vote on proposals, which are then executed
							on-chain through smart contracts.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
