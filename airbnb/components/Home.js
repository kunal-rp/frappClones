import Image from "@material-tailwind/react/Image";
import Getaway from './Getaway'

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

	const discoverOptions = [
		["e_option.jpeg", "Experiences", "Find unforgettable activities near you."],
		["onl_option.jpeg", "Online Experiences", "Live, interactive activities lead by Hosts."],
		["out_option.jpeg", "Outdoor Experiences", "Experiences that immerse you in nature."],
	];

	function explorePlace(img, name, dist) {
		return (
			<div className="flex flex-shrink-0">
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

	function option(img, name, desc) {
		return (
			<div className="flex-col mr-5">
				<Image 
					src={img}
					className="wrounded-xl object-scale-down"
	            	alt="icon"/>
	            	<p className="text-lg">{name}</p>
	            	{desc ? <p className="text-sm">{desc}</p> : <div />}
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
				<div className="flex mt-5 grid grid-rows-2 grid-flow-col overflow-auto flex-shrink-0">
					{places.map(place => explorePlace(place[0],place[1],place[2]))}
				</div>)}
			{section("Live Anywhere",
				<div className="relative flex flex-row mt-5">
					{anywhereOptions.map(op => option(op[0],op[1]))}
				</div>)}
			{section("",
				<div className="relative">
					<Image 
						src='try_hosting.png'
						className="rounded-md w-full hidden sm:block"
		            	alt="icon" />
		            <Image 
						src='try_hosting_sm.png'
						className="rounded-md w-full sm:hidden"
		            	alt="icon" />
		            <div className="absolute top-1/4 sm:top-1/3 text-white ml-20 max-w-xs"> 
		            	<p className="text-5xl">Try Hosting</p>
		            	<p className="text-ls mt-5">Earn Extra income and unlock new opportunities by sharing your space</p>
		            	<button className="rounded-md bg-white text-lg text-black pl-4 pr-4 pt-3 pb-3 mt-5"> Learn More </button>
		            </div>
	            </div>
	            	)}
			{section("Discover things to do",
				<div className="relative flex flex-row mt-5">
					{discoverOptions.map(op => option(op[0],op[1], op[2]))}
				</div>)}
			{section("Inspiration for future getaways",
				<div className="relative flex flex-row mt-5">
					<Getaway/>
				</div>)}
			
		</div>
	);

}