import { useState } from 'react';
import { Tag } from '../Tag';

function TagList() {
	const [selectedTag,setSelectedTag] = useState(null);

	const handleClick = (tag) => {
		selectedTag === tag ? setSelectedTag(null) : setSelectedTag(tag);
	}

	return (
    <div className="flex flex-row space-x-4 my-5 flex-wrap justify-between">
      <Tag tag="Agua" selectedTag={selectedTag} onClick={handleClick} />
      <Tag tag="Peso" selectedTag={selectedTag} onClick={handleClick} />
      <Tag tag="Comida" selectedTag={selectedTag} onClick={handleClick} />
    </div>
	)
}

export { TagList };