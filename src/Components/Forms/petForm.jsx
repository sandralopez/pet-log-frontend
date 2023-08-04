import { useState } from 'react';

function PetForm({ onSubmit, initialValues }) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value 
    }));
  };

  const handlePetSubmit =  (event) => {
    event.preventDefault();

    onSubmit(formData);
  }

  return (
    <form className="items-center w-80" onSubmit={handlePetSubmit}>
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
        Guardar
      </button>
    </form>
  )
}

export { PetForm };