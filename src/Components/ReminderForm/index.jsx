import { useState, useContext } from 'react';
import { PetContext } from '../../Context/PetContext';
import { Alert } from '../../Components/Alert';

function ReminderForm({ onSubmit, initialValues }) {
  const [pets, setPets] = useContext(PetContext);
  const [alert, setAlert] = useState({type: "", message:""});
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value 
    }));
  };

  const handleReminderSubmit =  (event) => {
    event.preventDefault();

    onSubmit(formData);
  }

  return (
    <form className="items-center w-80 mt-4" onSubmit={handleReminderSubmit}>
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
        htmlFor="subject" 
        className="label">
          Asunto: 
      </label>
      <input 
        type="text" 
        id="subject" 
        name="subject"
        placeholder="Asunto" 
        value={formData.subject}
        onChange={handleChange}
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
        value={formData.date}
        onChange={handleChange}
        min="2010-01-01"
        max="2050-01-01"
        required />
      <label 
        htmlFor="detail" 
        className="label">
          Detalle: 
      </label>
      <textarea
        id="detail" 
        name="detail"
        placeholder="Detalle" 
        value={formData.detail}
        onChange={handleChange}
        minLength="3"
        maxLength="512" 
        required />
      <button
        type="submit"
        className="button button-full">
        Guardar
      </button>
    </form>
  )
}

export { ReminderForm };