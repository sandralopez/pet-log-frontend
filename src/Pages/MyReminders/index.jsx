import { useContext, useState, useEffect } from 'react';
import { PetContext } from '../../Context/PetContext';
import { ModalContext } from '../../Context/ModalContext';
import { addReminder, updateReminder, deleteReminder, getAllReminders } from '../../Services/reminder';
import { HomeLayout } from '../../Components/HomeLayout';
import { ReminderForm } from '../../Components/ReminderForm';
import { ReminderCard } from '../../Components/ReminderCard';
import { Alert } from '../../Components/Alert';
import { Modal } from '../../Components/Modal';

function MyReminders() {
  const [pets, setPets] = useContext(PetContext); 
  const { showModal, setShowModal } = useContext(ModalContext);
  const [reminders, setReminders] = useState([]);
  const [alert, setAlert] = useState({type: "", message:""});
  const [isEditMode, setIsEditMode] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteHandler, setDeleteHandler] = useState(null);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [activeTab, setActiveTab] = useState('current');

  useEffect(() => {
    getRemindersService();
  }, []);

  async function getRemindersService() {
    try {
      const response = await getAllReminders();

      if (response.status === "ok") {
        setReminders(response.data);
      }
      else {
        throw Error('Ha ocurrido un error al obtener los recordatorios');
      }
    }
    catch(error) {
      setAlert(() => ({
        type: "error",
        message: "Ha ocurrido un error al obtener los recordatorios"
      }));
    }
  }

  const handleReturn = () => {
    setIsEditMode(null);
    setSelectedItem(null);
  }

  const handleEdit = (reminder) => {
    setIsEditMode(true);
    setSelectedItem({
    ...reminder,
    date: new Date(reminder.date).toISOString().split('T')[0]
    });
  }

  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedItem(null);
  }

  const handleSubmit = async (formData) => {
    if (!isEditMode) {
      try {
        const response = await addReminder(formData);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al crear el recordatorio');
        } 
        else {
          const currentDate = new Date();
          const reminderDate = new Date(response.data.date);

          if (reminderDate > currentDate) {
            setReminders((prevReminders) => ({
              ...prevReminders,
              current: [...prevReminders.current, response.data]
            }));
          }
          else {
            setReminders((prevReminders) => ({
              ...prevReminders,
              past: [...prevReminders.past, response.data]
            }));
          }

          setAlert(() => ({
            type: "success",
            message: "Recordatorio creado correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al crear el recordatorio"
          }));
      }
    } else if (isEditMode) {
      try {
        const { _id, created_at, petName, ...updatedReminder } = formData;

        const response = await updateReminder(_id, updatedReminder);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al modificar la información del recordatorio');
        } 
        else {
          const currentDate = new Date();
          const reminderDate = new Date(response.data.date);

          const newRemindersState = { ...reminders };

          const targetArray = reminderDate > currentDate ? 'current' : 'past'; 
          
          newRemindersState[targetArray] = newRemindersState[targetArray].map(reminder => 
            reminder._id === _id ? { ...reminder, ...response.data } : reminder
          )

          setReminders(newRemindersState);

          setAlert(() => ({
            type: "success",
            message: "Recordatorio modificado correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al modificar la información del recordatorio"
          }));
      }
    }
  };

  const handleConfirmDelete = (reminder) => {
    const handleDelete = async () => {
      try {
        const { petId, _id } = reminder;

        const response = await deleteReminder(petId, _id);

        if (response.status === 'error') {
          throw Error('Ha ocurrido un error al eliminar el recordatorio');
        } 
        else {
          const currentDate = new Date();
          const reminderDate = new Date(reminder.date);

          if (reminderDate > currentDate) {
            setReminders((prevReminders) => ({
              ...prevReminders,
              current: prevReminders.current.filter((reminder) => reminder._id !== response.data._id)
            }));
          }
          else {
            setReminders((prevReminders) => ({
              ...prevReminders,
              past: prevReminders.past.filter((reminder) => reminder._id !== response.data._id)
            }));
          }

          setAlert(() => ({
            type: "success",
            message: "Recordatorio eliminado correctamente"
          }));
        }

        setIsEditMode(null);
        setSelectedItem(null);
        setShowModal(false);
      }
      catch(error) {
          setAlert(() => ({
            type: "error",
            message: "Ha ocurrido un error al eliminar el recordatorio"
          }));
      }
    }

    setDeleteHandler(() => handleDelete);
    setShowModal(true);
    setConfirmMessage(`¿Deseas eliminar el recordatorio ${reminder.subject}?`)
  }

  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Recordatorios</p>
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }

          {
            isEditMode !== null ? (
              <>
                <ReminderForm onSubmit={handleSubmit} initialValues={selectedItem || {petId: pets[0]._id, subject: "", date: "", detail: ""}} />
                <span className="cursor-pointer place-self-center" onClick={handleReturn}>Volver</span>
              </>
            ) : (
              <>
                <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Ingresa recordatorios de próximas citas veterinarias, vacunas o lo que necesites para tus mascotas.</p>
                  <button
                    type="button"
                    onClick={handleCreate}
                    className="button">
                    Añadir nuevo
                  </button>
                <div className="flex flex-row mt-10 w-full">
                  <ul className="flex flex-wrap">
                    <li onClick={() => setActiveTab('current')} className={"tab " + (activeTab === 'current' ? 'active' : '')}>Recordatorios vigentes</li>
                    <li onClick={() => setActiveTab('past')} className={"tab " + (activeTab === 'past' ? 'active': '')}>Recordatorios pasados</li>
                  </ul>
                </div>
                <div className="grid grid-cols-3 gap-x-10 gap-y-20 mt-10">
                  {
                    reminders?.[activeTab]?.map(reminder => (
                      <ReminderCard 
                        key={reminder._id}
                        pet={reminder.petName}
                        date={reminder.date} 
                        subject={reminder.subject} 
                        detail={reminder.detail}
                        onSelect={() => handleEdit(reminder)}
                        onDelete={() => handleConfirmDelete(reminder)} />
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

export { MyReminders };