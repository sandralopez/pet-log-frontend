import { useEffect, useState } from 'react';
import { getTags, addTag, updateTag, deleteTag } from '../../Services/tag';
import { HomeLayout } from '../../Components/HomeLayout';
import { Table } from '../../Components/Table';
import { TagCard } from '../../Components/TagCard';
import { Alert } from '../../Components/Alert';
import { TagForm } from '../../Components/Forms/tagForm';

function MyTags() {
  const [tags, setTags] = useState([]);
  const [alert, setAlert] = useState({type: "", message:""})
  const [isEditMode, setIsEditMode] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() =>{
    getTagsService();
  }, []);

  async function getTagsService() {
    try {
      const response = await getTags();

      if (response.status === "ok") {
        setTags(response.data);
      }
      else {
        throw Error('Ha ocurrido un error al obtener las etiquetas');
      }
    }
    catch(error) {
      setAlert(() => ({
        type: "error",
        message: "Ha ocurrido un error al obtener las etiquetas"
      }));
    }
  }

  const handleReturn = () => {
    setIsEditMode(null);
    setSelectedItem(null);
  }

  const handleEdit = (tag) => {
    setIsEditMode(true);
    setSelectedItem(tag);
  }

  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedItem(null);
  }

  const handleSubmit = async (formData) => {
    if (!isEditMode) {
      try {
        const response = await addTag(formData);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al crear la nueva etiqueta');
        } 
        else {
          setAlert(() => ({
            type: "success",
            message: "Etiqueta creada correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
        getTagsService();
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al crear la nueva etiqueta"
          }));
      }
    } else if (isEditMode) {
      try {
        const { _id, created_at, ...updatedTag } = formData;

        const response = await updateTag(_id, updatedTag);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al modificar la información de la etiqueta');
        } 
        else {
          setAlert(() => ({
            type: "success",
            message: "Etiqueta modificada correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
        getTagsService();
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al modificar la información de la etiqueta"
          }));
      }
    }
  };

  const handleDelete = async (tag) => {
      try {
        const { _id } = tag;

        const response = await deleteTag(_id);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al eliminar la etiqueta');
        } 
        else {
          setAlert(() => ({
            type: "success",
            message: "Etiqueta eliminada correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
        getTagsService();
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al eliminar la etiqueta"
          }));
      }
  }

  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Etiquetas</p>
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }
          {
            isEditMode !== null ? (
              <>
                <TagForm onSubmit={handleSubmit} initialValues={selectedItem || {name: "", datatype: "", measureUnit: "", timeUnit: ""}} />
                <a href="#" onClick={handleReturn}>Volver</a>
              </>
            ) : (
              <>
                <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Gestiona las etiquetas de aquello que quieres registrar para adaptar el registro a tus necesidades.</p>
                  <button
                    type="button"
                    onClick={handleCreate}
                    className="mr-3 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white rounded-xl">
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
                      onSelect={() => handleEdit(tag)}
                      onDelete={() => handleDelete(tag)} />
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

export { MyTags };