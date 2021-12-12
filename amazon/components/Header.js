import styles from '../styles/Home.module.css'
import { 
	LocationMarkerIcon, 
	SearchIcon, 
	ChevronDownIcon,
	ChevronRightIcon, 
	FlagIcon, 
	ShoppingCartIcon,
	MenuIcon,
	InboxIcon} from '@heroicons/react/outline'

import {useState} from 'react';

export default function Header(){


	const [name] = useState("Kunal Purohit")

	const selectableProps = () => " p-1 border-transparent border-2 hover:border-white";

	const smallAndBig = (small, big) => (
		<div className={"text-sm flex-column text-start"+selectableProps()}>
				<div className="text-gray-200">{small}</div>
				<div className="font-bold flex">
					{big}
				</div>
			</div>)

	const searchBar = () => (
		<div className="flex grow flex-row text-black rounded-lg overflow-hidden rounded-xl  group border-4 border-transparent focus-within:border-yellow-500 ">
				<div className="flex bg-gray-200 p-1 items-center">
					<span className="text-sm text-gray-700" >All </span>
					<ChevronDownIcon className="w-[15px]"/>
				</div>
				<input className="grow group-focus:border-yellow-500 grow focus:outline-none p-2"/>
				<div className="flex bg-yellow-500 ">
					<SearchIcon className="w-[25px] text-gray-700 m-2 items-center "/>
				</div>
			</div>
	)
	
	return (
		<div className={styles.header}>
			<div className="flex w-full">
				<MenuIcon className=" lg:hidden w-[30px]" />
				<img src="logo.png" className={"w-[125px] h-[50px] pr-3"+selectableProps()} />
				<div className="flex hidden lg:block"> 
				{smallAndBig(
					"Deliver to "+name,
					<div className="flex">
						<LocationMarkerIcon className="w-[20px]" />
						1234 Street Ave. 
					</div> )}
				</div>
				
				<div className="flex grow hidden md:block">
					{searchBar()}
				</div>

				<div className="flex grow md:hidden grow items-center" >
					<div className="grow " />
					<div className="flex">
						{name.split(' ')[0]}
						<ChevronRightIcon className="w-[10px]"/> 
						<InboxIcon className="w-[30px]"/> 
					</div>
				</div>


				<div className={"flex hidden lg:inline"+selectableProps()}>
					<FlagIcon className="w-[30px]" />
					<ChevronDownIcon className="w-[15px]"/>
				</div>
				<div className="flex hidden lg:block"> 
				{smallAndBig(
					"Hello "+name.split(' ')[0],
					<div className="flex">
						Accounts & Lists
						<ChevronDownIcon className="w-[15px]"/>
					</div>)}
				</div>
				<div className="flex hidden lg:block"> 
				{smallAndBig(
					"Returns",
					<span>
						& Orders
					</span>)}
				</div>
				<div className={"flex font-bold text-white items-center"+selectableProps()}>
					<ShoppingCartIcon className="w-[30px]"/> 
					Cart
				</div>
			</div>
			<div className="w-full flex md:hidden">
				{searchBar()}
			</div>
		</div>)

}