import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"

import { signIn, signOut, useSession } from 'next-auth/client'

export default function Header() {

	const [session] = useSession();

	return (
		// items-center : center all items on the Y axis 
		<div className='sticky top-0 z-50 flex items-center px-4 shadow-md'>
			<Button
				color="gray"
				buttonType="outline"
				rounded={true}
				iconOnly={true}
				ripple="dark"
				className="md:inline-flex h-20 w-20 border-0"
				>
				<Icon name="menu" size="2xl" />
				</Button>
			<Icon name="description" size="4xl" color="blue"/>
			<h1 className="text-gray-700 text-2xl ml-2">Docs</h1>
			<div className="bg-gray-100 rounded-lg flex items-center flex-grow focus-within:shadow-md px-5 py-2 mx-5"> 
				<Icon name="search" size="2xl" color="gray"/>
				<input type="text" placeholder="Search" className="text-color-500  bg-transparent outline-none flex-grow px-4" />
			</div>
			<Button
				color="gray"
				buttonType="outline"
				rounded={true}
				iconOnly={true}
				ripple="dark"
				className="md:inline-flex h-20 w-20 border-0"
				onClick={() => signIn()}
				>
				<Icon name="apps" size="4xl"/>
			</Button>
			<Button
				color="gray"
				buttonType="outline"
				rounded={true}
				iconOnly={true}
				className="md:inline-flex border-0"
				onClick={() => signOut()}
				>
				{session.user.image ? < img loading="lazy" className="cursor-pointer rounded-full" src={session?.user?.image} /> :  <Icon name="account_circle" size="4xl" color="gray" className="cursor-pointer"/> }
			</Button>
		</div>
	);

}