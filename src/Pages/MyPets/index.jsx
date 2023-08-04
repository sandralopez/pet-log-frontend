import { useEffect, useState } from 'react';
import { getPets, addPet, updatePet, deletePet } from '../../Services/pet';
import { HomeLayout } from '../../Components/HomeLayout';
import { Pet } from '../../Components/Pet';
import { Alert } from '../../Components/Alert';
import { PetForm } from '../../Components/Forms/petForm';

function MyPets() {
  const [pets, setPets] = useState(null);
  const [alert, setAlert] = useState({type: "", message:""});
  const [isEditMode, setIsEditMode] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() =>{
    getPetsService();
  }, []);

  async function getPetsService() {
    try {
      const response = await getPets();

      if (response.status === "ok") {
        setPets(response.data);
      }
      else {
        throw Error('Ha ocurrido un error al obtener las mascotas');
      }
    }
    catch(error) {
      setAlert(() => ({
        type: "error",
        message: "Ha ocurrido un error al obtener las mascotas"
      }));
    }
  }

  const handleReturn = () => {
    setIsEditMode(null);
    setSelectedItem(null);
  }

  const handleEdit = (pet) => {
    setIsEditMode(true);
    setSelectedItem(pet);
  }

  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedItem(null);
  }

  const handleSubmit = async (formData) => {
    if (!isEditMode) {
      try {
        const response = await addPet(formData);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al crear la nueva mascota');
        } 
        else {
          setAlert(() => ({
            type: "success",
            message: "Mascota creada correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
        getPetsService();
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al crear la nueva mascota"
          }));
      }
    } else if (isEditMode) {
      try {
        const { _id, created_at, ...updatedPet } = formData;

        const response = await updatePet(_id, updatedPet);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al modificar la información de la mascota');
        } 
        else {
          setAlert(() => ({
            type: "success",
            message: "Mascota modificada correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
        getPetsService();
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al modificar la información de la mascota"
          }));
      }
    }
  };

  const handleDelete = async (pet) => {
      try {
        const { _id } = pet;

        const response = await deletePet(_id);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al eliminar la mascota');
        } 
        else {
          setAlert(() => ({
            type: "success",
            message: "Mascota eliminada correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
        getPetsService();
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al eliminar la mascota"
          }));
      }
  }

  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Mascotas</p>
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }

          {
            isEditMode !== null ? (
              <>
                <PetForm onSubmit={handleSubmit} initialValues={selectedItem || {name: "", species: "", birthdate: ""}} />
                <a href="#" onClick={handleReturn}>Volver</a>
              </>
            ) : (
              <>
                <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Ingresa a tus mascotas para poder crear sus registros.</p>
                  <button
                    type="button"
                    onClick={handleCreate}
                    className="mr-3 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white rounded-xl">
                    Añadir nueva
                  </button>
                <div className="grid grid-cols-3 gap-x-4 gap-y-20 mt-10">
                {
                  pets?.map(pet => (
                    <Pet 
                      key={pet._id}
                      avatar="#" 
                      name={pet.name}
                      species={pet.species}
                      onSelect={() => handleEdit(pet)}
                      onDelete={() => handleDelete(pet)}
                    />
                  ))
                }
                </div>
              </>
            )
          }
      </div>
    </HomeLayout>
  )
}

export { MyPets };