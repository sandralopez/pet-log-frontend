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
      <label htmlFor="petId" className="label">Mascota: </label>
        {
          alert.type && <Alert alert={alert} setAlert={setAlert} /> 
        }
      <select 
        id="petId" 
        name="petId" 
        onChange={handleChange} 
        defaultValue={formData.petId}>
          {
            pets?.map((pet) => (
              <option key={pet._id} value={pet._id}>{pet.name}</option>
            ))
          }
      </select>
      <label 
        htmlFor="value" 
        className="label">
          Valor: 
      </label>
      <input 
        type="text" 
        id="value" 
        name="value"
        placeholder="Valor" 
        onChange={handleChange}
        value={formData.value} />
      <label 
        htmlFor="date" 
        className="label">
          Fecha: 
      </label>
      <input 
        type="date" 
        id="date" 
        name="date"
        placeholder="Fecha" 
        onChange={handleChange}
        value={formData.date} />
      <label 
        htmlFor="detail" 
        className="label">
          Detalle: 
      </label>
      <textarea 
        placeholder="Observaciones" 
        id="detail" 
        name="detail"
        onChange={handleChange}
        value={formData.detail} />
      <button
        type="button"
        onClick={handleLogSubmit}
        className="button button-full">
        Guardar
      </button>
    </form>
  )
}

export { LogForm };