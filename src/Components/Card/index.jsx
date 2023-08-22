function Card({ title, description, children }) {
	return (
		<div className="w-72 rounded-xl shadow-lg dark:shadow-slate-600 dark:bg-slate-700 p-2">
			{ children }
			<div className="px-6 py-4">
				<div className="text-xl mb-2">{title}</div>
				<p className="text-gray-700 dark:text-slate-300 text-base">
					{description}
				</p>
			</div>
		</div>
	)
}

export { Card };