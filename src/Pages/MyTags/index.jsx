import { useState, useContext } from 'react';
import { TagContext } from '../../Context/TagContext';
import { ModalContext } from '../../Context/ModalContext';
import { addTag, deleteTag } from '../../Services/tag';
import { HomeLayout } from '../../Components/HomeLayout';
import { TagCard } from '../../Components/TagCard';
import { TagForm } from '../../Components/TagForm';
import { Alert } from '../../Components/Alert';
import { Modal } from '../../Components/Modal';

function MyTags() {
  const [tags, setTags] = useContext(TagContext);
  const { showModal, setShowModal } = useContext(ModalContext);
  const [alert, setAlert] = useState({type: "", message:""})
  const [showForm, setShowForm] = useState(false);
  const [deleteHandler, setDeleteHandler] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState("");

  const handleReturn = () => {
    setShowForm(false);
  }

  const handleCreate = () => {
    setShowForm(true);
  }

  const handleSubmit = async (formData) => {
    try {
      const response = await addTag(formData);

      if (response.status === 'error') {
        throw Error('Ha ocurrido un error al crear la nueva etiqueta');
      } 
      else {
        setTags(prevTags => [...prevTags, response.data]);

        setAlert(() => ({
          type: "success",
          message: "Etiqueta creada correctamente"
        }));
      }

      setShowForm(false);
    }
    catch(error) {
        setAlert(() => ({
          type: "error",
          message: "Ha ocurrido un error al crear la nueva etiqueta"
        }));
    }
  };

  const handleConfirmDelete = (tag) => {
    const handleDelete = async () => {
        try {
          const { _id } = tag;

          const response = await deleteTag(_id);

          if (response.status === 'error') {
            throw Error('Ha ocurrido un error al eliminar la etiqueta');
          } 
          else {
            setTags(tags.filter(tag => tag._id !== response.data._id));

            setAlert(() => ({
              type: "success",
              message: "Etiqueta eliminada correctamente"
            }));
          }

          setShowForm(false);
          setShowModal(false);
        }
        catch(error) {
            setAlert(() => ({
              type: "error",
              message: "Ha ocurrido un error al eliminar la etiqueta"
            }));
        }
    }

    setDeleteHandler(() => handleDelete);
    setShowModal(true);
    setConfirmMessage(`¿Deseas eliminar la etiqueta ${tag.name}?`)
  }

  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Etiquetas</p>
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }
          {
            showForm ? (
              <>
                <TagForm onSubmit={handleSubmit} initialValues={{name: "", datatype: "", measureUnit: "", timeUnit: ""}} />
                <span className="cursor-pointer place-self-center" onClick={handleReturn}>Volver</span>
              </>
            ) : (
              <>
                <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Gestiona las etiquetas de aquello que quieres registrar para adaptar el registro a tus necesidades.</p>
                  <button
                    type="button"
                    onClick={handleCreate}
                    className="button">
                    Añadir nueva
                  </button>
                <div className="grid grid-cols-3 gap-x-4 gap-y-20 mt-10">
                {
                  tags?.map(tag => (
                    <TagCard 
                      key={tag._id}
                      tag={tag.name} 
                      datatype={tag.datatype} 
                      measureUnit={tag.measureUnit} 
                      timeUnit={tag.timeUnit}
                      onDelete={() => handleConfirmDelete(tag)} />
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

export { MyTags };