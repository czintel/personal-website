import Image from "next/image";

export default function Home() {
	return (
		<main className="flex justify-center items-center w-full h-screen bg-slate-950">
			<div className="flex flex-row w-4/6 h-5/6 bg-slate-900 rounded-xl overflow-visible">
				<div className="basis-1/12 rounded-l-md overflow-clip">
					<div>Menü</div>
				</div>
				<div className="basis-4/12 bg-slate-500 rounded-md h-[107.5%] self-center">
					Picture
				</div>
				<div className="basis-7/12 rounded-r-md overflow-scroll p-8">
					<div className="flex flex-col gap-y-8">
						<div className="flex flex-col gap-y-2">
							{/* Bio  */}

							<h2>Christian Zintel</h2>
							<p>33 · Mediengestalter · Medienfachwirt · Frontend Developer</p>
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam et
								justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
								takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
								dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
								sed diam voluptua.
							</p>
						</div>

						{/* Stack & Skills  */}

						<div className="flex flex-col gap-y-2">
							<h3>Stack & Skills</h3>

							<div>
								<div>Techstack</div>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat.
								</p>
							</div>

							<div>
								<div>Software</div>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat.
								</p>
							</div>
						</div>

						{/* Qualifikationen */}

						<div className="flex flex-col gap-y-2">
							<h3>Qualifikationen und Weiterbildungen</h3>

							<div>
								<div>Ausbildung zum Mediengestalter</div>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat.
								</p>
							</div>

							<div>
								<div>berufsbegleitende Weiterbildung zum Medienfachwirt</div>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat.
								</p>
							</div>

							<div>
								<div>
									berufsbegleitende Weiterbildung zum Softwareentwickler
								</div>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
