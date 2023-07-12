import { useState } from 'react';
import { HomeLayout } from '../../Components/HomeLayout';

function MyAccount() {
  const [view, setView] = useState("view-user-info");

  const viewUserInfo = () => {
      return (
          <div>
            <div>
              <p>
                <span>Nombre de usuario: Usuario</span>
              </p>
              <p>
                <span>Email: unusuario@unusuario.com</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setView('edit-user-info')}
              className="mr-3 mt-5 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white rounded-xl">
              Editar
            </button>
          </div>
      );
  }

  const editUserInfo = () => {
      return (
        <form className="items-center w-80">
          <label 
            htmlFor="email" 
            className="font-light text-sm">
              Email: 
          </label>
          <input 
            type="email" 
            id="email" 
            placeholder="Dirección de email" 
            className="w-full mb-5 border border-black p-3 rounded-xl" />
          <label 
            htmlFor="username" 
            className="font-light text-sm">
              Nombre de usuario: 
          </label>
          <input 
            type="text" 
            id="username" 
            placeholder="Nombre de usuario" className="w-full mb-5 border border-black p-3 rounded-xl" />
          <label 
            htmlFor="password" 
            className="font-light text-sm">
              Contraseña: 
          </label>
          <input 
            type="password" 
            id="password" 
            placeholder="Minimo 8 caracteres" 
            className="w-full mb-5 border border-black p-3 rounded-xl" />
          <label 
            htmlFor="repeatPassword" 
            className="font-light text-sm">
              Repetir contraseña: 
          </label>
          <input 
            type="password" 
            id="repeatPassword" 
            placeholder="Repite la contraseña" 
            className="w-full mb-5 border border-black p-3 rounded-xl" />
          <button
            type="button"
            onClick={() => setView('view-user-info')}
            className="mr-3 inline-block rounded bg-black px-6 py-4 text-xs font-medium uppercase leading-normal text-white rounded-xl w-full mb-5">
            Guardar
          </button>
        </form>
      );
  }

  const renderView = () => {
    return view === "view-user-info" ? viewUserInfo() : editUserInfo();
  }

  return (
      <HomeLayout>
        <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
          <div className="flex flex-col items-center">
            <p className="font-medium text-xl">Mi cuenta</p>
            <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Revisa y edita la información de tu cuenta.</p>
          </div>
          { renderView() }
        </div>
      </HomeLayout>
  );
}

export { MyAccount };