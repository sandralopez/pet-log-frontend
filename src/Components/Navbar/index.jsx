import { Link } from 'react-router-dom';

function Navbar () {
	return (
		<nav className="relative flex w-full flex-wrap items-center justify-between py-2 shadow-lg lg:py-4 mb-10">
		  <div className="flex w-full flex-wrap items-center justify-between px-3">
		    <div className="ml-2">
		      <Link
		      	to="/"
		        className="text-xl font-semibold"
		        >
		        	Pet Log
		   		</Link>
		    </div>
			<div className="ml-5 flex w-[30%] items-center justify-end">
				<ul	className="list-style-none flex flex-col pl-0 lg:mt-1 lg:flex-row">
					<li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
						<Link
							to="/sign-in"
							className="active lg:px-2">
							Iniciar sesión
						</Link>
					</li>
				</ul>
				<Link
					to='/sign-up'
				>
					<button
					  type="button"
					  className="mr-3 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white rounded-xl">
					  Regístrate
					</button>
				</Link>
			</div>
		  </div>
		</nav>
	)
}

export { Navbar };