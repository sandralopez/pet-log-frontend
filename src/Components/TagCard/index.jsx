import { TrashIcon } from '@heroicons/react/24/solid';

function TagCard({ tag, datatype, measureUnit, timeUnit, onDelete}) {
	return (
		<div className="w-72 rounded shadow-lg">
			<div className="px-6 py-4">
				<p className="text-xl mb-2">
					{tag}
				</p>
	            <label 
	              htmlFor="datatype" 
	              className="label text-gray-700">
	                Tipo de dato
	            </label>
				<p id="datatype" className="text-gray-700 text-sm mb-2">
					{datatype}
				</p>
	            <label 
	              htmlFor="unitMeasure" 
	              className="label text-gray-700">
	                Unidad de medida
	            </label>
				<p id="unitMeasure" className="text-gray-700 text-sm mb-2">
					{measureUnit}
				</p>
	            <label 
	              htmlFor="unitTime" 
	              className="label text-gray-700">
	                Unidad de tiempo
	            </label>
				<p id="unitTime" className="text-gray-700 text-sm mb-2">
					{timeUnit}
				</p>
				
				<TrashIcon className="h-5 w-5 text-gray-700 cursor-pointer" onClick={onDelete} />
			</div>
		</div>
	)
}

export { TagCard };