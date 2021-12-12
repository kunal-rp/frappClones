import styles from '../styles/Home.module.css'
import { LocationMarkerIcon, SearchIcon, ChevronDownIcon, FlagIcon, ShoppingCartIcon } from '@heroicons/react/outline'

export default function Header(){

	const selectableProps = () => " p-1 border-transparent border-2 hover:border-white";


	const smallAndBig = (small, big) => (
		<div className={"text-sm flex-column text-start"+selectableProps()}>
				<div className="text-gray-200">{small}</div>
				<div className="font-bold flex">
					{big}
				</div>
			</div>)


	console.log(styles.header)
	return (
		<div className={styles.header}>
			<img src="logo.png" className={"w-[125px] h-[50px] pr-3"+selectableProps()} />
			{smallAndBig(
				"Deliver to Kunal",
				<div className="flex">
					<LocationMarkerIcon className="w-[20px]" />
					1234 Street Ave. 
				</div> )}
			
			<div className="flex flex-row text-black rounded-lg overflow-hidden ounded-xl w-1/2 group border-4 border-transparent focus-within:border-yellow-500 ">
				<div className="flex bg-gray-200 p-1 items-center p-2">
					<span className="text-sm text-gray-700" >All </span>
					<ChevronDownIcon className="w-[15px]"/>
				</div>
				<input className="grow group-focus:border-yellow-500 grow focus:outline-none "/>
				<div className="flex bg-yellow-500 ">
					<SearchIcon className="w-[25px] text-gray-700 m-2 items-center "/>
				</div>
			</div>
			<div className={"flex"+selectableProps()}>
				<FlagIcon className="w-[30px]" />
				<ChevronDownIcon className="w-[15px]"/>
			</div>
			{smallAndBig(
				"Hello Person",
				<div className="flex">
					Accounts & Lists
					<ChevronDownIcon className="w-[15px]"/>
				</div>)}
			{smallAndBig(
				"Returns",
				<span>
					& Orders
				</span>)}

			<div className={"flex font-bold text-white"+selectableProps()}>
				<ShoppingCartIcon className="w-[30px]"/> 
				Cart
			</div>
		</div>)

}