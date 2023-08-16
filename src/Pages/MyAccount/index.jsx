import { useState, useEffect } from 'react';
import { getUser, updateUser, deleteUser } from '../../Services/user';
import { HomeLayout } from '../../Components/HomeLayout';
import { Alert } from '../../Components/Alert';

function MyAccount() {
  const [view, setView] = useState("view-user-info");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [repeatPassword,setRepeatPassword] = useState("");
  const [alert, setAlert] = useState({type: "", message:""});

  useEffect(() =>{
    async function getUserService() {
      try {
        const response = await getUser();

        if (response.status === "ok") {
          setUsername(response.data.username);
          setEmail(response.data.email);
        }
        else {
          throw Error('Ha ocurrido un error al obtener la información');
        }
      }
      catch(error) {
        setAlert(() => ({
          type: "error",
          message: 'Ha ocurrido un error al obtener la información'
        }));
      }
    }

    getUserService();
  }, []);

  const handleUserInfoSubmit = async (formData) => {
    try {
      const formData = {
        username,
        email,
        password
      };

      const response = await updateUser(formData);

      if (response.status === 'error') {
        throw Error('Ha ocurrido un error al modificar la información del usuario');
      } 
      else {

        setView('view-user-info');

        setAlert(() => ({
          type: "success",
          message: "Datos modificados correctamente"
        }));
      }
    }
    catch(error) {
        setAlert(() => ({
          type: "error",
          message: 'Ha ocurrido un error al modificar la información del usuario'
        }));
    }
      
    setPassword("");
  };

  const handleUserPasswordSubmit = async (formData) => {
    try {
      const formData = {
        username,
        password,
        newPassword,
        repeatPassword
      };

      const response = await updateUser(formData);

      if (response.status === 'error') {
        throw Error('Ha ocurrido un error al modificar la información del usuario');
      } 
      else {
        setView('view-user-info');

        setAlert(() => ({
          type: "success",
          message: "Datos modificados correctamente"
        }));
      }
    }
    catch(error) {
        setAlert(() => ({
          type: "error",
          message: 'Ha ocurrido un error al modificar la información del usuario'
        }));
    }

    setPassword("");
    setNewPassword("");
    setRepeatPassword("");
  };

  const viewUserInfo = () => {
      return (
          <>
            <div className="w-full">
              <p>Nombre de usuario: {username}</p>
              <p>Email: {email}</p>
            </div>
            <button
              type="button"
              onClick={() => setView('edit-user-info')}
              className="button button-full mt-4">
              Editar
            </button>
            <button
              type="button"
              onClick={() => setView('edit-user-password')}
              className="button button-full">
              Cambiar contraseña
            </button>
          </>
      );
  }

  const editUserInfo = () => {
      return (
        <>
          <form>
            <label 
              htmlFor="username" 
              className="label">
                Nombre de usuario: 
            </label>
            <input 
              type="text" 
              id="username" 
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Nombre de usuario" 
              className="input" />
            <label 
              htmlFor="email" 
              className="label">
                Email: 
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Dirección de email" 
              className="input" />
            <label 
              htmlFor="password" 
              className="label">
                Contraseña: 
            </label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Minimo 8 caracteres" 
              className="input" />
            <button
              type="button"
              onClick={handleUserInfoSubmit}
              className="button button-full">
              Guardar
            </button>
          </form>
          <span className="cursor-pointer place-self-center" onClick={() => setView("view-user-info")}>Volver</span>
        </>
      );
  }

  const editUserPassword = () => {
      return (
        <>
          <form>
            <label 
              htmlFor="password" 
              className="label">
                Contraseña anterior
            </label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Contraseña actual" 
              className="input" />
            <label 
              htmlFor="email" 
              className="label">
                Nueva contraseña: 
            </label>
            <input 
              type="password" 
              id="newPassword" 
              name="newPassword"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder="Nueva contraseña" 
              className="input" />
            <label 
              htmlFor="password" 
              className="label">
                Repetir contraseña: 
            </label>
            <input 
              type="password" 
              id="repeatPassword" 
              name="repeatPassword"
              value={repeatPassword}
              onChange={(event) => setRepeatPassword(event.target.value)}
              placeholder="Repetir contraseña" 
              className="input" />
            <button
              type="button"
              onClick={handleUserPasswordSubmit}
              className="button button-full">
              Guardar
            </button>
          </form>
          <span className="cursor-pointer" onClick={() => setView("view-user-info")}>Volver</span>
        </>
      );
  }

  const renderView = () => {
    if (view === "view-user-info") {
      return viewUserInfo();
    } 
    else if (view === "edit-user-info") {
      return editUserInfo();
    }
    else if (view === "edit-user-password") {
      return editUserPassword();
    }
  }

  return (
      <HomeLayout>
        <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
          <div className="flex flex-col items-center w-80">
            <p className="font-medium text-xl">Mi cuenta</p>
            <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Revisa y edita la información de tu cuenta.</p>
            {
              alert.type && <Alert alert={alert} setAlert={setAlert} /> 
            }
          { renderView() }
          </div>
        </div>
      </HomeLayout>
  );
}

export { MyAccount };