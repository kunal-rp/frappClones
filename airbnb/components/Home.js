import Image from "@material-tailwind/react/Image";

export default function Header() {

	const places = [
		["sf_explore.png", "San Francisco", "15 min"],
		["sj_explore.jpeg", "San Jose", "1.5 hour"],
		["ok_explore.png", "Okland", "30 min"],
		["sb_explore.jpeg", "Santa Barbara", "7 hour"],
		["bk_explore.jpeg", "Berkeley", "15 min"],
		["mm_explore.jpeg", "Mammoth Lake", "1.5 hour"],
	];

	const anywhereOptions = [
		["og_option.jpeg", "Outdoor getaways"],
		["us_option.jpeg", "Unique stays"],
		["eh_option.jpeg", "Entire homes"],
		["pa_option.jpeg", "Pet allowed"],
	];

	function explorePlace(img, name, dist) {
		return (
			<div className="flex">
				<Image 
					src={img}
					className="h-20 rounded-md"
	            	alt="icon" />
	            <div className="flex-grow m-5 ">
	            	<p className="font-bold">{name}</p>
	            	<p>{dist} drive</p>
	            </div>
			</div>
		)
	}

	function liveanywherePlace(img, name) {
		return (
			<div className="flex-col ml-5">
				<Image 
					src={img}
					className="wrounded-xl object-scale-down"
	            	alt="icon"/>
	            	<p className="text-lg">{name}</p>
			</div>
		)
	}

	function section(title, child){
		return (
			<div className="pl-5 pr-5 md:max-w-screen-2xl mx-auto"> 
				<h1 className="text-3xl font-bold">
					{title}
				</h1>
				<div> {child} </div>
			</div>
		);
	}


	return (
		//hero
		<div className="space-y-7  mx-auto">
			<div className="relative">
				<Image 
					src="airbnb_cover.png"
					className="w-full"
	            	alt="cover" />
	            <div className="absolute top-1/3 md:top-1/2 w-full text-center ">
	            	<p className="text-lg mb-5"> Not sure where to go? Perfect.</p>
	            	<button className="bg-white p-5 pl-14 pr-14 rounded-full shadow-md text-lg hover:shadow-xl active:scale-90 transition duration-150">
	            	 I'm flexible
	            	 </button>
	            </div> 
			</div>
			{section("Explore nearby",
				<div className="flex mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
					{places.map(place => explorePlace(place[0],place[1],place[2]))}
				</div>)}
			{section("Live Anywhere",
				<div className="relative flex flex-row mt-5">
					{anywhereOptions.map(place => liveanywherePlace(place[0],place[1]))}
				</div>)}
			
		</div>
	);

}