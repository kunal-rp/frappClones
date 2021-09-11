import Image from "@material-tailwind/react/Image";

export default function Header() {

	return (
		//hero
		<div className="space-y-7">
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
			<div className="md:max-w-screen-2xl mx-auto"> 
				<h1 className="text-3xl font-bold"> Explore nearbye </h1>
			</div>
		</div>
	);

}