import { Link } from 'react-router-dom';
import { useAuth } from '../../CustomHooks/useAuth';
import { Notification } from '../../Components/Notification';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

function Navbar () {
	const { isLogged, logout } = useAuth();

	return (
		<nav className="relative flex w-full flex-wrap items-center justify-between py-2 shadow-lg dark:shadow-slate-700 lg:py-4 mb-10">
		  <div className="flex w-full flex-wrap items-center justify-between px-3">
		    <div className="ml-2">
		      <Link
		      	to="/"
		        className="text-xl font-semibold"
		        >
		        	Pet Log
		   		</Link>
		    </div>

		    {
		    	isLogged
		    		?
		    			<div className="ml-5 flex w-[30%] items-center justify-end">
							<ul	className="list-style-none flex flex-col pl-0 lg:mt-1 lg:flex-row">
								<li>
									<Link to="/help">
						            	<QuestionMarkCircleIcon 
							                className="h-6 w-6 mr-2 cursor-pointer text-gray-900 dark:text-slate-300" />
							        </Link>
								</li>
								<li>
									<Notification />
								</li>
								<li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1">
									<Link
										to="/home"
										className="active lg:px-2">
										Mi Inicio
									</Link>
								</li>
							</ul>
							<Link
								to='/'
								onClick={logout}
							>
								<button
								  type="button"
								  className="button">
								  Cerrar sesión
								</button>
							</Link>
		    			</div>
		    		:
						<div className="ml-5 flex w-[30%] items-center justify-end">
							<ul	className="list-style-none flex flex-col pl-0 lg:mt-1 lg:flex-row">
								<li>
									<Link to="/help">
						            	<QuestionMarkCircleIcon 
							                className="h-6 w-6 mr-2 cursor-pointer text-gray-900 dark:text-slate-300" />
							        </Link>
								</li>
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
								  className="button">
								  Regístrate
								</button>
							</Link>
						</div>
		    }

		  </div>
		</nav>
	)
}

export { Navbar };