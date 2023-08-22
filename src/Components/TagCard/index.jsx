import { TrashIcon } from '@heroicons/react/24/solid';

function TagCard({ tag, datatype, measureUnit, timeUnit, onDelete}) {
	return (
		<div className="w-72 rounded-xl shadow-lg dark:shadow-slate-600 dark:bg-slate-700 text-gray-700 dark:text-slate-300">
			<div className="px-6 py-4">
				<p className="text-xl mb-2">
					{tag}
				</p>
	            <label 
	              htmlFor="datatype" 
	              className="label">
	                Tipo de dato
	            </label>
				<p id="datatype" className="text-sm mb-2">
					{datatype}
				</p>
	            <label 
	              htmlFor="unitMeasure" 
	              className="label">
	                Unidad de medida
	            </label>
				<p id="unitMeasure" className="text-sm mb-2">
					{measureUnit}
				</p>
	            <label 
	              htmlFor="unitTime" 
	              className="label">
	                Unidad de tiempo
	            </label>
				<p id="unitTime" className="text-sm mb-2">
					{timeUnit}
				</p>
				
				<TrashIcon className="h-5 w-5 cursor-pointer" onClick={onDelete} />
			</div>
		</div>
	)
}

export { TagCard };