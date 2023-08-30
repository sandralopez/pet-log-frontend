import { useState, useContext } from 'react';
import { PetContext } from '../../Context/PetContext';
import { TagContext } from '../../Context/TagContext';
import { Tag } from '../Tag';
import { Alert } from '../../Components/Alert';

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
    <form className="items-center w-80" onSubmit={handleLogSubmit}>
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
        value={formData.petId}>
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
        value={formData.value}
        minLength="3"
        maxLength="128" 
        required />
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
        value={formData.date}
        min="2010-01-01"
        max="2050-01-01"
        required />
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
        value={formData.detail}
        minLength="3"
        maxLength="1000"
        required />
      <button
        type="submit"
        className="button button-full">
        Guardar
      </button>
    </form>
  )
}

export { LogForm };