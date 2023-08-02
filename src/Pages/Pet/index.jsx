import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { addPet } from '../../Services/pet';
import { Link } from 'react-router-dom';
import { HomeLayout } from '../../Components/HomeLayout';
import { Alert } from '../../Components/Alert';

function Pet() {
  const { jwt } = useContext(AuthContext);
  const [formData, setFormData] = useState({name: "", species: "", birthdate: ""});
  const [alert, setAlert] = useState({type: "", message:""})

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value 
    }));
  };

  const handlePetSubmit =  async (event) => {
    event.preventDefault();

    try {
      const response = await addPet(jwt, formData);

      if (response.status === 'error') {
        throw Error('Ha ocurrido un error al crear la nueva mascota');
      } 
      else {
        setAlert(() => ({
          type: "success",
          message: "Mascota creada correctamente"
        }));
      }
    }
    catch(error) {
        setAlert(() => ({
          type: "error",
          message: "Ha ocurrido un error al crear la nueva mascota"
        }));
    }
  }

  return (
    <HomeLayout>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-80">
          <p className="mb-5 font-medium text-xl">Añade una nueva mascota</p>
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }
          <form className="items-center w-full" onSubmit={handlePetSubmit}>
            <div className="flex justify-center">
              <div className="mb-5 w-20 h-20 flex justify-center items-center rounded-full bg-gray-300">
                <img src="#" className="rounded-full" />
              </div>
            </div>
            <label 
              htmlFor="name" 
              className="font-light text-sm">
                Nombre: 
            </label>
            <input 
              type="text" 
              id="name" 
              name="name"
              placeholder="Nombre" 
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <label 
              htmlFor="species" 
              className="font-light text-sm">
                Especie: 
            </label>
            <input 
              type="text" 
              id="species" 
              name="species"
              placeholder="Especie" 
              value={formData.species}
              onChange={handleChange}
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <label 
              htmlFor="birthdate" 
              className="font-light text-sm">
                Fecha de nacimiento: 
            </label>
            <input 
              type="text" 
              id="birthdate" 
              name="birthdate"
              placeholder="Fecha de nacimiento" 
              value={formData.birthdate}
              onChange={handleChange}
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <button
              type="submit"
              className="mr-3 inline-block rounded bg-black px-6 py-4 text-xs font-medium uppercase leading-normal text-white rounded-xl w-full mb-5">
              Añadir
            </button>
          </form>
        </div>
      </div>
    </HomeLayout>
  )
}

export { Pet };