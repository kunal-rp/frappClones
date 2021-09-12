import Image from "@material-tailwind/react/Image";
import Icon from "@material-tailwind/react/Icon";

export default function Header() {

	return (
		<div className="sticky top-0 z-50 w-screen border-b-2 shadow-lg bg-white">
			<div className="flex w-full pt-5 md:pt-5 pb-5 pl-5 pr-5 items-center md:max-w-screen-xl mx-auto ">
				<div className="w-24 hidden lg:block">
					<Image 
					src="airbnb_full.png"
	            	rounded={false}
	            	raised={false}
	            	alt="logo" />
				</div>
				<div className="h-8 w-8 hidden sm:block lg:hidden">
					<Image 
					src="airbnb_logo.png"
	            	rounded={false}
	            	raised={false}
	            	alt="logo" />
				</div>
				<div className="mx-auto flex-grow  max-full sm:max-w-sm ">
					<div className="items-center flex rounded-full pl-3 pr-3 pt-2 pb-2 border-2 shadow-sm">
						<input type="text" placeholder="Search" className="flex-grow pl-2 pr-2"/>
						<div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
						  <Icon name="search" size="lg" color="white" />
						</div>
					</div>
				</div>
				<div className="space-x-3 flex items-center hidden sm:inline-flex">
					<div className="text-md">Become a Host</div>
					<Icon name="language" size="sm" />
					<div className="rounded-full border flex p-2">
						<Icon name="menu" size="lg" color="gray"/>
						<Icon name="account_circle" size="lg" color="gray"/>
					</div>
					
				</div>
			</div>
		</div>
	);

}