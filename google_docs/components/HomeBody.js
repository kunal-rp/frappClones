import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import Image from 'next/Image'

export default function HomeBody() {

	return (
		<div>
			<div className="bg-gray-200 py-3">
				<div className="max-w-3xl mx-auto flex items-center"> 
				    <h2 className="text-gray-700"> Start a new document</h2>
				   	<div className="flex-grow" />
				     <Button
							color="gray"
							buttonType="outline"
							rounded={true}
							iconOnly={true}
							className="md:inline-flex border-0"
							>
							<Icon name="more_vert" size="3xl"/>
						</Button>
			    </div>
					<div className="max-w-3xl mx-auto flex items-center py-3"> 
				      	<div> 
				      		<div className="h-60 w-40 border-2 flex items-center justify-center bg-white cursor-pointer">
				      			<Icon name="add" size="6xl" />
				      		</div>
				      		<h2 className="my-4"> Blank</h2>
				      	</div>
				      	<div className="flex-grow" />
				    </div>
		    </div>
		    <div className="py-3 max-w-3xl mx-auto flex items-center">
					<h2 className="text-gray-700"> My Documents</h2>
					<div className="flex-grow" />
					<h2 className="text-gray-700 mx-10"> Date Created</h2>
					<Icon name="folder" size="3xl" color="gray"/>
			   </div>

	    </div>
	);

}