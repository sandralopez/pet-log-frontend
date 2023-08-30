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
      { formData.name.length > 0 && 
        <div className="flex justify-center">
            <div className="mb-5 w-20 h-20 flex justify-center items-center rounded-full bg-gray-300 dark:bg-slate-700 text-xl text-white dark:text-slate-200">
                 <p className="font-semibold">{formData.name[0].toUpperCase()}</p>
            </div>
        </div>
      }
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
        onChange={handleChange}
        minLength="3"
        maxLength="128" 
        required />
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
        onChange={handleChange}
        minLength="3"
        maxLength="128" 
        required />
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
        onChange={handleChange}
        min="2010-01-01"
        max="2050-01-01"
        required />
      <button
        type="submit"
        className="button button-full">
        Guardar
      </button>
    </form>
  )
}

export { PetForm };