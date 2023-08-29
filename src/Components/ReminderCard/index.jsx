import { TrashIcon } from '@heroicons/react/24/solid';

function ReminderCard({ date, subject, detail}) {
	return (
		<div className="w-72 rounded-xl shadow-lg dark:shadow-slate-700 dark:bg-slate-800 text-gray-700 dark:text-slate-300">
			<div className="px-6 py-4">
	            <label 
	              htmlFor="date" 
	              className="label">
	                Fecha
	            </label>
				<p id="date" className="text-sm mb-2">
					{new Date(date).toLocaleDateString()}
				</p>
	            <label 
	              htmlFor="subject" 
	              className="label">
	                Asunto
	            </label>
				<p id="subject" className="text-sm mb-2">
					{subject}
				</p>
	            <label 
	              htmlFor="detail" 
	              className="label">
	                Detalle
	            </label>
				<p id="detail" className="text-sm mb-2">
					{detail}
				</p>
				
				<TrashIcon className="h-5 w-5 cursor-pointer" />
			</div>
		</div>
	)
}

export { ReminderCard };