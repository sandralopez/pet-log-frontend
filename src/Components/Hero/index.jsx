import { Link } from 'react-router-dom';

function Hero() {
	return (
		<div className="flex w-full h-80 mb-20 mt-20 items-center">
			<div className="flex w-1/2 bg-gray-100 dark:bg-slate-800 pl-20 pr-20 h-full items-center">
				<div className="flex-row">
					<p className="font-bold text-xl">
						Toda la información de tu mejor amigo en un único lugar
					</p>
					<p className="font-light mb-5 mt-5">
						¿Necesitas mantener un registro de tu mascota para hacer seguimiento de su estado de salud? Registra sus hábitos, sucesos relacionados con su salud, tratamientos y citas veterinarias en Pet Log.
					</p>
					<Link
						to='/sign-up'
					>
						<button
						  type="button"
						  className="button">
						  Regístrate aquí
						</button>
					</Link>
				</div>
			</div>
			<div className="flex-row w-1/2 h-full bg-gray-300 dark:bg-slate-700">

			</div>
		</div>
	)
}

export { Hero };