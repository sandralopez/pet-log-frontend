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
    <form className="items-center w-80 mt-4" onSubmit={handlePetSubmit}>
      <div className="flex justify-center">
        <div className="mb-5 w-20 h-20 flex justify-center items-center rounded-full bg-gray-300">
          <img src="#" className="rounded-full" />
        </div>
      </div>
      <label 
        htmlFor="name" 
        className="label">
          Nombre: 
      </label>
      <input 
        type="text" 
        id="name" 
        name="name"
        placeholder="Nombre" 
        value={formData.name}
        onChange={handleChange} />
      <label 
        htmlFor="species" 
        className="label">
          Especie: 
      </label>
      <input 
        type="text" 
        id="species" 
        name="species"
        placeholder="Especie" 
        value={formData.species}
        onChange={handleChange} />
      <label 
        htmlFor="birthdate" 
        className="label">
          Fecha de nacimiento: 
      </label>
      <input 
        type="date" 
        id="birthdate" 
        name="birthdate"
        placeholder="Fecha de nacimiento" 
        value={formData.birthdate}
        onChange={handleChange} />
      <button
        type="submit"
        className="button button-full">
        Guardar
      </button>
    </form>
  )
}

export { PetForm };