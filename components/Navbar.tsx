import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='bg-slate-500 flex gap-4 p-5'>
			<Link href='/'>Home</Link>

			<Link href='/todos'>Todos</Link>
		</nav>
	);
};

export default Navbar;
