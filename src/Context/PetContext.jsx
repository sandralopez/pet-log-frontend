import { createContext, useState, useEffect } from 'react';
import { getPets } from '../Services/pet';

const PetContext = createContext();

const PetContextProvider = ({children}) => {
	const [pets, setPets] = useState([]);

	useEffect(() => {
	  async function getPetsService() {
	    try {
	      const response = await getPets();

	      if (response.status === "ok") {
	        setPets(response.data);
	      }
	      else {
	        throw Error('Ha ocurrido un error al obtener las mascotas');
	      }
	    }
	    catch(error) {
			throw Error('Ha ocurrido un error al obtener las mascotas');
	    }
	  }

	  getPetsService();
	}, []);

	return (
		<PetContext.Provider value={[
			pets,
			setPets
		]}>
			{children}
		</PetContext.Provider>
	)
}

export { PetContext, PetContextProvider }