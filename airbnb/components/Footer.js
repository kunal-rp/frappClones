export default function Footer() {

	const aboutOptions = [
		"How Airbnb Works",
		"Newsroom",
		"Airbnb 2021",
		"Investors",
		"Airbnb Plus",
		"Airbnb Luxe",
		"HotelTonight",
		"Airbnb for Work",
		"How Airbnb Works",];

	const communityOptions = [
		"Diversity & Belonging",
		"Against Discrimination",
		"Accessibility",
		"Airbnb Associates",
		"Host AFgahan refugees",
		"Guest REfferals",
		"Giftcards",
		"Airbnb.org",
	]

	const hostOptions = [
		"Host your home",
		"Host an Online Experience",
		"Host an Experience",
		"Responsible hosting",
		"Resource Center",
		"Community Center",
	]

	const supportOptions = [
		"Our COVID-19 Response",
		"Help Center",
		"Host Cancellation options",
		"Neighborhood Support",
		"Trust & Safety",
	]

	const options = [
		["About", aboutOptions],
		["Community", communityOptions],
		["Host", hostOptions],
		["Support", supportOptions],
	]

	function createOptionsList(list){

		return (
			<div className="grid grid-cols-3 md:grid-cols-1 ">
				{list.map((op, index) => <div id={index} className="mt-3 text-gray-500"> {op} </div>)}
			</div>
		)
	}



	return (
		<div className="w-full border-t-4 bg-gray-100 p-5 divide-y">
			<div className="grid grid-rows-4 md:grid-cols-4 divide-y md:divide-none md:max-w-screen-2xl mx-auto md:max-h-96">
				{options.map((op, index) => 
					<div id={index} className="mt-5 ">
						<div className="font-bold">{op[0]}</div>
						{createOptionsList(op[1])}
					</div>
					)}
			</div>
			<div className="flex">
				<p className="text-gray-500"> @2021 Airbnb</p>
				<div className="flex-grow" />
				<p className="text-gray-500"> drpkrp</p>
			</div>
		</div>
	)

}