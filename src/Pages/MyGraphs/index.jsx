import { useState, useContext, useEffect } from 'react';
import { getLogs } from '../../Services/log';
import { PetContext } from '../../Context/PetContext';
import { TagContext } from '../../Context/TagContext';
import { ChartBars } from '../../Components/ChartBars';
import { ChartLines } from '../../Components/ChartLines';
import { HomeLayout } from '../../Components/HomeLayout';
import { Alert } from '../../Components/Alert';

function MyGraphs() {
  const [pets, setPets] = useContext(PetContext);  
  const [tags, setTags] = useContext(TagContext);  
  const [selectedPet, setSelectedPet] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [filters, setFilters] = useState({ tag: "", minDate: "", maxDate: ""})
  const [alert, setAlert] = useState({type: "", message:""});
  const [data, setData] = useState([]);

  useEffect(() => {
    if (pets.length > 0) {
      setSelectedPet(pets[0]._id);
    } else {
      setSelectedPet("");
    }
  }, [pets]);

  useEffect(() => {
    if (tags.length > 0) {
      setSelectedTag(tags[0]);

      setFilters(prevData => ({
        ...prevData,
        tag: tags[0]._id,
      }));
    } else {
      setSelectedTag({});

      setFilters(prevData => ({
        ...prevData,
        tag: "",
      }));
    }
  }, [tags]);

  useEffect(() => {
    if (selectedPet !== "" && selectedTag.tag !== "") {
      getLogsService();
    }
  }, [selectedPet, selectedTag, filters]);

  const handleFiltersChange = (event) => {
    setFilters(prevData => ({
      ...prevData,
      [event.target.getAttribute("data-filter")]: event.target.value,
    }));
  }

  const handleSelectTag = (event) => {
    const tagId = event.target.value;

    tags?.map((tag) => {
      if (tag._id === tagId) {
        setSelectedTag(tag);
      }
    });

    setFilters(prevData => ({
      ...prevData,
      tag: tagId
    }));
  };

  async function getLogsService() {
    try {
      const response = await getLogs(selectedPet, filters);

      if (response.status === "ok") {
        setData([]);
        
        response.data.rows.map(log => {
          setData(prevData => ([
            ...prevData, 
            { name: new Date(log.date).toLocaleDateString('es-ES', { timeZone: 'UTC' }), value: log.value }
          ]));
        });
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

  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Gráficas</p>
        <p className="font-light text-medium mt-10 text-center ml-10 mr-10">Revisa las gráficas para comprobar la evolución de tus mascotas a lo largo del tiempo.</p>
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }
        <div className="my-5 sm:columns-1 md:columns-2">
          <div className="w-full flex flex-col">
            <label htmlFor="pet" className="label">Selecciona una de tus mascotas: </label>
            <select id="pet" value={selectedPet} onChange={event => setSelectedPet(event.target.value)} className="w-80 my-4 border border-black p-3 rounded-xl">
              {
                pets?.map((pet) => (
                    <option key={pet._id} value={pet._id}>{pet.name}</option>
                ))
              }
            </select>
            <label htmlFor="tag" className="label">Selecciona el ítem que quieres visualizar: </label>
            <select id="tag" data-filter="tag" value={selectedTag._id} onChange={handleSelectTag} className="w-80 my-4 border border-black p-3 rounded-xl">
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
          <div className="flex flex-col w-11/12 h-80 mt-4">
            {
              data.length == 0 && <span className="font-medium font-xl">No hay registros para la selección</span> 
            }

            {
              data.length > 0 && selectedTag.datatype === "Numero" && <ChartLines data={data} />
            }

            {
              data.length > 0 && selectedTag.datatype === "Texto" && <ChartBars data={data} />
            }
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export { MyGraphs };