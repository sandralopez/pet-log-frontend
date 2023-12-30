import { useState, useContext, useEffect } from 'react';
import { PetContext } from '../../Context/PetContext';
import { TagContext } from '../../Context/TagContext';
import { getLogs, getLogsByTag, addLog, updateLog, deleteLog } from '../../Services/log';
import { HomeLayout } from '../../Components/HomeLayout';
import { Table } from '../../Components/Table';
import { Alert } from '../../Components/Alert';
import { LogForm } from '../../Components/LogForm';
import { Pagination } from '../../Components/Pagination';

function MyLogs() {
  const [pets, setPets] = useContext(PetContext);  
  const [tags, setTags] = useContext(TagContext);
  const [selectedPet, setSelectedPet] = useState("");
  const [logs, setLogs] = useState([]);
  const [alert, setAlert] = useState({type: "", message:""});
  const [isEditMode, setIsEditMode] = useState(null);
  const [pagination, setPagination] = useState({ currentPage: 1, size: 10 });
  const [pageCount, setPageCount] = useState(null);
  const [filters, setFilters] = useState({ tag: "", minDate: "", maxDate: ""})

  const columns = [
    {
      header: 'Fecha',
      accessor: (row) => new Date(row.date).toLocaleDateString('es-ES', { timeZone : 'UTC' })
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
    if (selectedPet !== "" || filters.tag !== "") {
      getLogsService();
    }
  }, [selectedPet, filters, pagination]);

  async function getLogsService() {
    try {
      const response = await getLogs(selectedPet, filters, pagination);

      if (response.status === "ok") {
        setPageCount(response.data.pageCount);
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

  const handleSubmit = async (formData) => {
    if (!isEditMode) {
      try {
        const response = await addLog(formData);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al crear el registro');
        } 
        else {
          setLogs(logs => ([
            ...logs,
            {
              tagId: response.data.tag,
              petId: response.data.pet,
              value: response.data.value,
              date: response.data.date,
              detail: response.data.detail
            }
          ]));

          setPagination((prevData) => ({
            ...prevData,
            currentPage: 1
          }));

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

  const handlePageChange = (newPage) => {
    setPagination((prevData) => ({
      ...prevData,
      currentPage: newPage
    }))
  }

  const handlePetChange = (event) => {
    setSelectedPet(event.target.value);
    setPagination((prevData) => ({
      ...prevData,
      currentPage: 1
    }))
  }

  const handleFiltersChange = (event) => {
    setFilters(prevData => ({
      ...prevData,
      [event.target.getAttribute("data-filter")]: event.target.value,
    }));
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
                <span className="cursor-pointer place-self-center" onClick={() => setIsEditMode(null) }>Volver</span>
              </>
            ) : (
              <>
                <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Añade y visualiza los registros de tus mascotas.</p>
                <button
                  type="button"
                  onClick={() => setIsEditMode(false) }
                  className="button">
                  Añadir nuevo
                </button>
                <div className="my-5 sm:columns-1 md:columns-2">
                  <div className="w-full flex flex-col">
                    <label htmlFor="pet" className="label">Selecciona una de tus mascotas: </label>
                    <select id="pet" value={selectedPet} onChange={handlePetChange} className="w-80 my-4 border border-black p-3 rounded-xl">
                      {
                        pets?.map((pet) => (
                            <option key={pet._id} value={pet._id}>{pet.name}</option>
                        ))
                      }
                    </select>
                    <label htmlFor="tag" className="label">Selecciona el ítem que quieres visualizar: </label>
                    <select id="tag" data-filter="tag" value={filters.tag._id} onChange={handleFiltersChange} className="w-80 my-4 border border-black p-3 rounded-xl">
                      <option value="">Ver todos</option>
                      {
                        tags?.map((tag) => (
                            <option key={tag._id} value={tag._id}>{tag.name}</option>
                        ))
                      }
                    </select>
                    <label htmlFor="min-date" className="label">Selecciona la fecha mínima: </label>
                    <input id="min-date" type="date" data-filter="minDate" value={filters.minDate} onChange={handleFiltersChange} className="w-80 my-4 border border-black p-3 rounded-xl" />
                    <label htmlFor="max-date" className="label">Selecciona la fecha ḿáxima: </label>
                    <input id="max-date" type="date" data-filter="maxDate" value={filters.maxDate} onChange={handleFiltersChange} className="w-80 my-4 border border-black p-3 rounded-xl" />
                  </div>
                </div>
                <div className="w-full flex flex-col my-5">
                  { 
                    logs.length === 0 ? (
                      <span className="font-medium font-xl text-medium">No hay registros asociados a esta mascota</span>
                    ) : (
                      <>
                        <Table rows={logs} columns={columns} />
                        <Pagination
                          currentPage={pagination.currentPage}
                          pageCount={pageCount}
                          onPageChange={handlePageChange}
                        />
                      </>
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