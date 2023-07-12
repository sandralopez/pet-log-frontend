function Card({ icon, title, description}) {
	return (
		<div className="w-72 rounded shadow-lg">
			<div className="flex justify-center">
				<p>{icon}</p>
			</div>
			<div className="px-6 py-4">
				<div className="text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">
					{description}
				</p>
			</div>
		</div>
	)
}

export { Card };