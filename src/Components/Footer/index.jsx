import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="flex justify-center items-center mt-20 mb-10 w-full">
			<div className="w-9/12">
				<div className="flex justify-between mb-2">
					<p className="text-gray-500">Pet Log</p>
					<div className="flex">
						<Link
							to="/about"
							className="text-gray-500"
						>
							Acerca de
						</Link>
						<p className="text-gray-500 ml-4">Contacto</p>
					</div>
				</div>
				<hr className=" border border-gray-500 w-full" />
			</div>
		</div>
	);
}

export { Footer };