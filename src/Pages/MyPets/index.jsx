import { useContext, useState } from 'react';
import { PetContext } from '../../Context/PetContext';
import { ModalContext } from '../../Context/ModalContext';
import { addPet, updatePet, deletePet } from '../../Services/pet';
import { HomeLayout } from '../../Components/HomeLayout';
import { Pet } from '../../Components/Pet';
import { PetForm } from '../../Components/PetForm';
import { Alert } from '../../Components/Alert';
import { Modal } from '../../Components/Modal';

function MyPets() {
  const [pets, setPets] = useContext(PetContext);
  const { showModal, setShowModal } = useContext(ModalContext);
  const [alert, setAlert] = useState({type: "", message:""});
  const [isEditMode, setIsEditMode] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteHandler, setDeleteHandler] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleReturn = () => {
    setIsEditMode(null);
    setSelectedItem(null);
  }

  const handleEdit = (pet) => {
    setIsEditMode(true);
    setSelectedItem({
      ...pet,
      birthdate: new Date(pet.birthdate).toISOString().split('T')[0]
    });
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
          setPets(prevPets => [...prevPets, response.data]);

          setAlert(() => ({
            type: "success",
            message: "Mascota creada correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
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
          setPets(prevPets => {
            return prevPets.map(pet =>
              pet._id === _id ? { ...pet, ...response.data } : pet
            );
          });

          setAlert(() => ({
            type: "success",
            message: "Mascota modificada correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al modificar la información de la mascota"
          }));
      }
    }
  };

  const handleConfirmDelete = (pet) => {
    const handleDelete = async () => {
      try {
        const { _id } = pet;

        const response = await deletePet(_id);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al eliminar la mascota');
        } 
        else {
          setPets(pets.filter(pet => pet._id !== response.data._id));

          setAlert(() => ({
            type: "success",
            message: "Mascota eliminada correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
        setShowModal(false);
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al eliminar la mascota"
          }));
      }
    }

    setDeleteHandler(() => handleDelete);
    setShowModal(true);
    setConfirmMessage(`¿Deseas eliminar la mascota ${pet.name}?`)
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
                <span className="cursor-pointer place-self-center" onClick={handleReturn}>Volver</span>
              </>
            ) : (
              <>
                <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Ingresa a tus mascotas para poder crear sus registros.</p>
                  <button
                    type="button"
                    onClick={handleCreate}
                    className="button">
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
                      onDelete={() => handleConfirmDelete(pet)}
                    />
                  ))
                }
                </div>
              </>
            )
          }
      </div>

      {
        showModal && (
          <Modal confirmMessage={confirmMessage} onConfirm={deleteHandler} />
        )
      }
    </HomeLayout>
  )
}

export { MyPets };