import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
	return (
		<>
			<Head>
				<title>Alex Lee Myers | Portfolio</title>
				<meta
					name="description"
					content="Generated by Next.js using TypeScript and Tailwind."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-white px-10 ">
				<section className="bg-blue-500 min-h-screen">
					<nav className="py-10 mb-12 flex justify-between">
						<h1 className="text-xl">Alex Lee Myers</h1>

						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill />
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
									href="#"
								>
									Home
								</a>
							</li>
							<li>
								<a href="#">Resume</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Projects</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</nav>
				</section>
			</main>
		</>
	);
}
