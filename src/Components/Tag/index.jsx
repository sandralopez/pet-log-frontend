import { useState } from 'react';

function Tag({ tag, selectedTag, onClick }) {
	return (
		<div 
			className={`flex ${selectedTag===tag._id ? "bg-gray-300" : "bg-gray-200"} rounded-full px-4 py-2 items-center justify-center mb-2 cursor-pointer`}
			onClick={() => onClick(tag._id) }
		>
		  <span className="text-gray-800 text-sm font-medium">{tag.name}</span>
		</div>
	)
}

export { Tag };