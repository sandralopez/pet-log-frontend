import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { getPets } from '../../Services/pet';
import { HomeLayout } from '../../Components/HomeLayout';
import { Pet } from '../../Components/Pet';
import { Alert } from '../../Components/Alert';

function MyPets() {
  const { jwt } = useContext(AuthContext);
  const [pets, setPets] = useState([]);
  const [alert, setAlert] = useState({type: "", message:""})

  useEffect(() =>{
    async function getPetsService() {
      try {
        const response = await getPets(jwt);

        if (response.status === "ok") {
          setPets(response.data);
        }
        else {
          throw Error('Ha ocurrido un error al obtener las mascotas');
        }
      }
      catch(error) {
        setAlert(() => ({
          type: "error",
          message: "Ha ocurrido un error al obtener las mascotas"
        }));
      }
    }

    getPetsService();
  }, [jwt]);

  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Mascotas</p>
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }
        <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Ingresa a tus mascotas para poder crear sus registros.</p>
        <Link 
          to="/my-pets/add"
        >
          <button
            type="button"
            className="mr-3 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white rounded-xl">
            Añadir nueva
          </button>
        </Link>
        <div className="grid grid-cols-3 gap-x-4 gap-y-20 mt-10">
        {
          pets?.map(pet => (
            <Pet 
              key={pet._id}
              avatar="#" 
              name={pet.name}
              species={pet.species}
            />
          ))
        }
        </div>
      </div>
    </HomeLayout>
  )
}

export { MyPets };