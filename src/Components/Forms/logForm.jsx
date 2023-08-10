import { useState, useContext, useEffect } from 'react';
import { PetContext } from '../../Context/PetContext';
import { TagContext } from '../../Context/TagContext';
import { Tag } from '../Tag';
import { Alert } from '../../Components/Alert';
import { getPets } from '../../Services/pet';

function LogForm({ onSubmit, initialValues }) {
  const [formData, setFormData] = useState(initialValues);
  const [alert, setAlert] = useState({type: "", message:""});
  const [pets, setPets] = useContext(PetContext);
  const [tags, setTags] = useContext(TagContext);
  const [selectedTag, setSelectedTag] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value 
    }));
  };

  const handleLogSubmit =  (event) => {
    event.preventDefault();

    onSubmit(formData);
  }

  const handleTagClick = (tag) => {
    tag === "" ? setSelectedTag("") : setSelectedTag(tag);

    setFormData((prevFormData) => ({
      ...prevFormData, 
      tagId: tag 
    }));
  }

  return (
    <form className="items-center w-80">
      <div className="flex flex-row space-x-4 my-5 flex-wrap justify-between">
        {
            tags?.map((tag) => (
                <Tag key={tag._id} tag={tag} selectedTag={selectedTag} onClick={handleTagClick} />
            ))
        }
      </div>
      <label htmlFor="petId" className="font-light text-sm">Mascota: </label>
        {
          alert.type && <Alert alert={alert} setAlert={setAlert} /> 
        }
      <select id="petId" name="petId" onChange={handleChange} defaultValue={formData.petId} className="w-full mb-5 border border-black p-3 rounded-xl">
        {
          pets?.map((pet) => (
            <option key={pet._id} value={pet._id}>{pet.name}</option>
          ))
        }
      </select>
      <label 
        htmlFor="value" 
        className="font-light text-sm">
          Valor: 
      </label>
      <input 
        type="text" 
        id="value" 
        name="value"
        placeholder="Valor" 
        onChange={handleChange}
        value={formData.value}
        className="w-full mb-5 border border-black p-3 rounded-xl" />
      <label 
        htmlFor="date" 
        className="font-light text-sm">
          Fecha: 
      </label>
      <input 
        type="date" 
        id="date" 
        name="date"
        placeholder="Fecha" 
        onChange={handleChange}
        value={formData.date}
        className="w-full mb-5 border border-black p-3 rounded-xl" />
      <label 
        htmlFor="detail" 
        className="font-light text-sm">
          Detalle: 
      </label>
      <textarea 
        placeholder="Observaciones" 
        id="detail" 
        name="detail"
        onChange={handleChange}
        value={formData.detail}
        className="w-full mb-5 border border-black p-3 rounded-xl" />
      <button
        type="button"
        onClick={handleLogSubmit}
        className="mr-3 inline-block rounded bg-black px-6 py-4 text-xs font-medium uppercase leading-normal text-white rounded-xl w-full mb-5">
        Guardar
      </button>
    </form>
  )
}

export { LogForm };