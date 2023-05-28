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
				<div className="basis-7/12  rounded-r-md overflow-clip">Bio</div>
			</div>
		</main>
	);
}
