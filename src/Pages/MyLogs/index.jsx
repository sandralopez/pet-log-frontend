import { useState, useContext, useEffect } from 'react';
import { PetContext } from '../../Context/PetContext';
import { TagContext } from '../../Context/TagContext';
import { getLogs, addLog, updateLog, deleteLog } from '../../Services/log';
import { HomeLayout } from '../../Components/HomeLayout';
import { Table } from '../../Components/Table';
import { Alert } from '../../Components/Alert';
import { LogForm } from '../../Components/Forms/logForm';

function MyLogs() {
  const [pets, setPets] = useContext(PetContext);
  const [tags, setTags ] = useContext(TagContext);
  const [selectedPet, setSelectedPet] = useState("");
  const [logs, setLogs] = useState([]);
  const [alert, setAlert] = useState({type: "", message:""});
  const [isEditMode, setIsEditMode] = useState(null);

  async function getLogsService(pet) {
    try {
      const response = await getLogs(pet);

      if (response.status === "ok") {
        setLogs(response.data);
      }
      else {
        throw Error('Ha ocurrido un error al obtener los registros');
      }
    }
    catch(error) {
      setAlert(() => ({
        type: "error",
        message: "Ha ocurrido un error al obtener los registros"
      }));
    }
  }

  const handleChange = (event) => {
    const petId = event.target.value;
    
    setSelectedPet(petId);

    petId !== "" ? getLogsService(petId) : setLogs([]);
  }

  const handleReturn = () => {
    setIsEditMode(null);
  }

  const handleEdit = (pet) => {
    setIsEditMode(true);
  }

  const handleCreate = () => {
    setIsEditMode(false);
  }

  const handleSubmit = async (formData) => {
    if (!isEditMode) {
      try {
        const response = await addLog(formData);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al crear el registro');
        } 
        else {
          setAlert(() => ({
            type: "success",
            message: "Registro creado correctamente"
          }));
        }

        setIsEditMode(null);
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al crear el registro"
          }));
      }
    } else if (isEditMode) {
      try {
        const { _id, created_at, ...updatedLog } = formData;

        const response = await updateLog(_id, updatedLog);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al modificar la información del registro');
        } 
        else {
          setAlert(() => ({
            type: "success",
            message: "Registro modificado correctamente"
          }));
        }

        setIsEditMode(null);
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al crear el registro"
          }));
      }
    }
  };

  const handleDelete = async (log) => {
      try {
        const { _id } = log;

        const response = await deleteLog(_id);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al eliminar el registro');
        } 
        else {
          setAlert(() => ({
            type: "success",
            message: "Registro eliminado correctamente"
          }));
        }

        setIsEditMode(null);
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al eliminar el registro"
          }));
      }
  }

  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Registros</p>
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }
          {
            isEditMode !== null ? (
              <>
                <LogForm onSubmit={handleSubmit} initialValues={{tag: "", petId: pets[0]._id, value: "", date: "", detail: ""}} />
                <a href="#" onClick={handleReturn}>Volver</a>
              </>
            ) : (
              <>
                <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Añade y visualiza los registros de tus mascotas.</p>
                <button
                  type="button"
                  onClick={handleCreate}
                  className="mr-3 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white rounded-xl">
                  Añadir nuevo
                </button>
                <div className="w-9/12 items-center my-5">
                  <label htmlFor="pet" className="font-light text-sm">Selecciona una de tus mascotas para ver un listado de sus registros: </label>
                  <select id="pet" onChange={handleChange} className="w-80 my-4 border border-black p-3 rounded-xl">
                    <option value="">Selecciona...</option>
                    {
                      pets?.map((pet) => (
                          <option key={pet._id} value={pet._id}>{pet.name}</option>
                      ))
                    }
                  </select>
                  { 

                    logs.length > 0 ? (
                      <span>Hay registros</span>
                    ) : (
                      <span>NO hay registros asociados </span>
                    )
                  }
                </div>
              </>
            )
          }
      </div>
    </HomeLayout>
  )
}

export { MyLogs };