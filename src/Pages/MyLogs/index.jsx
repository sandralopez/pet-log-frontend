import { useState, useContext, useEffect } from 'react';
import { PetContext } from '../../Context/PetContext';
import { TagContext } from '../../Context/TagContext';
import { getLogs, getLogsByTag, addLog, updateLog, deleteLog } from '../../Services/log';
import { HomeLayout } from '../../Components/HomeLayout';
import { Table } from '../../Components/Table';
import { Alert } from '../../Components/Alert';
import { LogForm } from '../../Components/LogForm';

function MyLogs() {
  const [pets, setPets] = useContext(PetContext);  
  const [tags, setTags] = useContext(TagContext);
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [logs, setLogs] = useState([]);
  const [alert, setAlert] = useState({type: "", message:""});
  const [isEditMode, setIsEditMode] = useState(null);

  const columns = [
    {
      header: 'Fecha',
      accessor: (row) => new Date(row.date).toLocaleDateString()
    },
    {
      header: 'Etiqueta',
      accessor: (row) => row.tagName
    },
    {
      header: 'Valor',
      accessor: (row) => row.value
    },
    {
      header: 'Detalle', 
      accessor: (row) => row.detail
    }
  ];

  useEffect(() => {
    if (pets.length > 0) {
      setSelectedPet(pets[0]._id);
    } else {
      setSelectedPet("");
    }
  }, [pets]);

  useEffect(() => {
    if (selectedPet !== "" || selectedTag !== "") {
      getLogsService(selectedPet, selectedTag);
    }
  }, [selectedPet, selectedTag]);

  async function getLogsService(pet, tag) {
    try {
      const response = tag ? await getLogsByTag(pet, tag) : await getLogs(pet);

      if (response.status === "ok") {
        setLogs(response.data.rows);
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
                <LogForm onSubmit={handleSubmit} initialValues={{tagId: "", petId: pets[0]._id, value: "", date: "", detail: ""}} />
                <span className="cursor-pointer place-self-center" onClick={handleReturn}>Volver</span>
              </>
            ) : (
              <>
                <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Añade y visualiza los registros de tus mascotas.</p>
                <button
                  type="button"
                  onClick={handleCreate}
                  className="button">
                  Añadir nuevo
                </button>
                <div className="w-full flex flex-col my-5">
                  <label htmlFor="pet" className="label">Selecciona una de tus mascotas: </label>
                  <select id="pet" value={selectedPet} onChange={event => setSelectedPet(event.target.value)} className="w-80 my-4 border border-black p-3 rounded-xl">
                    {
                      pets?.map((pet) => (
                          <option key={pet._id} value={pet._id}>{pet.name}</option>
                      ))
                    }
                  </select>
                  <label htmlFor="tag" className="label">Selecciona el ítem que quieres visualizar: </label>
                  <select id="tag" value={selectedTag._id} onChange={event => setSelectedTag(event.target.value)} className="w-80 my-4 border border-black p-3 rounded-xl">
                    <option value="">Ver todos</option>
                    {
                      tags?.map((tag) => (
                          <option key={tag._id} value={tag._id}>{tag.name}</option>
                      ))
                    }
                  </select>
                  { 
                    logs.length === 0 ? (
                      <span className="font-medium font-xl text-medium">No hay registros asociados a esta mascota</span>
                    ) : (
                      <Table rows={logs} columns={columns} />
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