import { PencilIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/solid';

function Pet({ avatar, name, species, onSelect, onDelete}) {
	return (
		<div className="w-72 rounded shadow-lg flex justify-center">
		    <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-300 text-xl text-white">
		      {/* <img src={avatar} className="rounded-full" /> */}
		      <p className="font-semibold">{name[0].toUpperCase()}</p>
		    </div>
			<div className="px-6 py-4">
				<div className="text-xl mb-2">{name}</div>
				<p className="text-gray-700 text-base">
					{species}
				</p>
				<div className="flex flex-row mt-4">
					<PencilIcon className="h-5 w-5 text-gray-700 cursor-pointer mr-4" onClick={onSelect} />
					<TrashIcon className="h-5 w-5 text-gray-700 cursor-pointer" onClick={onDelete} />
				</div>
			</div>
		</div>
	)
}

export { Pet };