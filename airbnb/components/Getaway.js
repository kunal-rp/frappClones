import {useState} from 'react';

export default function Getaway() {

	const [activeOption, setActiveOption] = useState(0);

	const cities = [["Baton Rouge"," Louisiana"],["Indianapolis"," Indiana"],["Columbus"," Ohio"],["Montgomery"," Alabama"],["Helena"," Montana"],["Denver"," Colorado"],["Boise"," Idaho"],["Austin"," Texas"],["Boston"," Massachusetts"],["Albany"," New York"],["Tallahassee"," Florida"],["Santa Fe"," New Mexico"],["Nashville"," Tennessee"],["Trenton"," New Jersey"],["Jefferson"," Missouri"],["Richmond"," Virginia"],["Pierre"," South Dakota"],["Harrisburg"," Pennsylvania"],["Augusta"," Maine"],["Providence"," Rhode Island"],["Dover"," Delaware"],["Concord"," New Hampshire"],["Montpelier"," Vermont"],["Hartford"," Connecticut"],["Topeka"," Kansas"],["Saint Paul"," Minnesota"],["Juneau"," Alaska"],["Lincoln"," Nebraska"],["Raleigh"," North Carolina"],["Madison"," Wisconsin"],["Olympia"," Washington"],["Phoenix"," Arizona"],["Lansing"," Michigan"],["Honolulu"," Hawaii"],["Jackson"," Mississippi"],["Springfield"," Illinois"],["Columbia"," South Carolina"],["Annapolis"," Maryland"],["Cheyenne"," Wyoming"],["Salt Lake City"," Utah"],["Atlanta"," Georgia"],["Bismarck"," North Dakota"],["Frankfort"," Kentucky"],["Salem"," Oregon"],["Little Rock"," Arkansas"],["Des Moines"," Iowa"],["Sacramento"," California"],["Oklahoma City"," Oklahoma"],["Charleston"," West Virginia"],["Carson City"," Nevada"]]

	const buttons = [
		["Desinations for arts & culture",cities],
		["Desinations for outdoor adventure",cities.slice(20,40)],
		["Mountain cabins",cities.slice(10,46)],
		["Beach destinations",cities.slice(2,16)],
		["Popular destinations",cities.slice(5,7)],
		["Unique stays",cities.slice(1,38)],
	];

	function createPlace(city, state){

		return (
			<div className="pb-5">
				<p className="text-sm font-bold">{city}</p>
				<p className="text-sm">{state}</p>
			</div>)
	}



	function createButton(text, index){
		return (
			<button 
				className="mr-3 text-gray-500 hover:bg-gray-100 p-2 rounded-md focus:text-black focus:border-b-2 focus:border-black flex-shrink-0"
				onClick={() => setActiveOption(index)}
				> {text}</button>
		);

	}

	return (
		<div className="divide-y w-full ">
			<div className="flex overflow-x-scroll">
				{buttons.map((but, index) => createButton(but[0], index))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 pt-7">
				{buttons[activeOption][1].map(place => createPlace(place[0],place[1]))}
			</div>
		</div>)

}