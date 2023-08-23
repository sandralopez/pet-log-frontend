import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className="flex justify-center items-center mt-20 mb-10 w-full text-gray-500 dark:text-slate-400">
			<div className="w-9/12">
				<div className="flex justify-between mb-2">
					<p>Pet Log</p>
					<div className="flex">
						<Link
							to="/about"
						>
							Acerca de
						</Link>
					</div>
				</div>
				<hr className=" border border-gray-500 w-full" />
			</div>
		</div>
	);
}

export { Footer };