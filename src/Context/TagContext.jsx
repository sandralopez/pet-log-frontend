import { createContext, useState, useEffect } from 'react';
import { getTags } from '../Services/tag';

const TagContext = createContext();

const TagContextProvider = ({children}) => {
	const [tags, setTags] = useState([]);

	useEffect(() => {
	  async function getTagsService() {
	    try {
	      const response = await getTags();

	      if (response.status === "ok") {
	        setTags(response.data);
	      }
	      else {
	        throw Error('Ha ocurrido un error al obtener las etiquetas');
	      }
	    }
	    catch(error) {
			throw Error('Ha ocurrido un error al obtener las etiquetas');
	    }
	  }

	  getTagsService();
	}, []);

	return (
		<TagContext.Provider value={[
			tags,
			setTags
		]}>
			{children}
		</TagContext.Provider>
	)
}

export { TagContext, TagContextProvider }