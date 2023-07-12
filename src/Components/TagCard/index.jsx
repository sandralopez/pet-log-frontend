function TagCard({ tag, datatype, unitMeasure, unitTime}) {
	return (
		<div className="w-72 rounded shadow-lg cursor-pointer">
			<div className="px-6 py-4">
				<p className="text-xl mb-2">
					{tag}
				</p>
	            <label 
	              htmlFor="datatype" 
	              className="font-light text-sm text-gray-700">
	                Tipo de dato
	            </label>
				<p id="datatype" className="text-gray-700 text-sm mb-2">
					{datatype}
				</p>
	            <label 
	              htmlFor="unitMeasure" 
	              className="font-light text-sm text-gray-700">
	                Unidad de medida
	            </label>
				<p id="unitMeasure" className="text-gray-700 text-sm mb-2">
					{unitMeasure}
				</p>
	            <label 
	              htmlFor="unitTime" 
	              className="font-light text-sm text-gray-700">
	                Unidad de tiempo
	            </label>
				<p id="unitTime" className="text-gray-700 text-sm mb-2">
					{unitTime}
				</p>
			</div>
		</div>
	)
}

export { TagCard };