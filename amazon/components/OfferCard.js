import React, {useState} from 'react';

export default function OfferCard(props){
	return (
	<div className={"flex flex-col p-4 bg-white w-[250px] h-[400px] border-2 "+ props.className}> 
		<span className="font-bold text-xl"> {props.title}</span>
		<div className="">{props.children}</div>

	</div>)
}