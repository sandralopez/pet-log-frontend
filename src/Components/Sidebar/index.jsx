import { NavLink } from 'react-router-dom';
import './styles.css';

function Sidebar () {
	return (
		<div className="ml-10 min-h-0 flex-1 flex w-1/4">
		    <nav id="sidebar" className="bg-white">
		        <div className="relative w-30 flex space-y-3 flex-col p-3">
		            <NavLink 
		            	to="/home"
		            	className="text-black hover:text-red-700">
		                <p className="text-center text-sm font-normal ">Inicio</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-pets"
		            	className="text-black hover:text-red-700">
		                <p className="text-center text-sm font-normal ">Mis mascotas</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-tags"
		            	className="text-black hover:text-red-700">
		                <p className="text-center text-sm font-normal ">Etiquetas</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-logs"
		            	className="text-black hover:text-red-700">
		                <p className="text-center text-sm font-normal ">Registros</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-graphs"
		            	className="text-black hover:text-red-700">
		                <p className="text-center text-sm font-normal ">Gráficas</p>
		            </NavLink>
		            <NavLink 
		            	to="/my-account"
		            	className="text-black hover:text-red-700">
		                <p className="text-center text-sm font-normal ">Mi cuenta</p>
		            </NavLink>
		            <NavLink 
		            	to="/"
		            	className="text-black hover:text-red-700">
		                <p className="text-center text-sm font-normal ">Cerrar sesión</p>
		            </NavLink>
		        </div>
		    </nav>
		</div>
	)
}

export { Sidebar };