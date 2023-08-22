import { NavLink } from 'react-router-dom';
import { useAuth } from '../../CustomHooks/useAuth';

function Sidebar () {
	const { logout } = useAuth();

	return (
		<div className="ml-10 min-h-0 flex-1 flex w-1/4">
		    <nav id="sidebar">
		        <div className="relative w-30 flex space-y-3 flex-col p-3">
		            <NavLink 
		            	to="/home"
		            	className="text-black dark:text-slate-200 hover:text-red-700 dark:hover:text-cyan-400">
		                <p className="text-center text-sm font-normal ">Inicio</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-pets"
		            	className="text-black dark:text-slate-200 hover:text-red-700 dark:hover:text-cyan-400">
		                <p className="text-center text-sm font-normal ">Mis mascotas</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-tags"
		            	className="text-black dark:text-slate-200 hover:text-red-700 dark:hover:text-cyan-400">
		                <p className="text-center text-sm font-normal ">Etiquetas</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-logs"
		            	className="text-black dark:text-slate-200 hover:text-red-700 dark:hover:text-cyan-400">
		                <p className="text-center text-sm font-normal ">Registros</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-graphs"
		            	className="text-black dark:text-slate-200 hover:text-red-700 dark:hover:text-cyan-400">
		                <p className="text-center text-sm font-normal ">Gráficas</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-account"
		            	className="text-black dark:text-slate-200 hover:text-red-700 dark:hover:text-cyan-400">
		                <p className="text-center text-sm font-normal ">Mi cuenta</p>
		            </NavLink>
		            <NavLink 
		            	to="/"
		            	onClick={() => logout() }
		            	className="text-black dark:text-slate-200 hover:text-red-700 dark:hover:text-cyan-400">
		                <p className="text-center text-sm font-normal ">Cerrar sesión</p>
		            </NavLink>
		        </div>
		    </nav>
		</div>
	)
}

export { Sidebar };