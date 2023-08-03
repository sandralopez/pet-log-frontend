import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout';
import { useAuth } from '../../CustomHooks/useAuth';
import { useNavigate } from "react-router-dom";

function SignIn({setToken}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate('/home')
  },[isLogged, navigate]); 

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    login({username, password});
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-80">
          <p className="mb-10 font-medium text-xl">Inicio de sesión</p>
          <form className="items-center" onSubmit={handleLoginSubmit}>
            <label 
              htmlFor="username" 
              className="font-light text-sm">
                Nombre de usuario: 
            </label>
            <input 
              type="text" 
              id="username" 
              value={username}
              placeholder="Nombre de usuario" 
              onChange={(event) => setUsername(event.target.value)}
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <label 
              htmlFor="password" 
              className="font-light text-sm">
                Contraseña: 
            </label>
            <input 
              type="password" 
              id="password" 
              value={password}
              placeholder="Contraseña" 
              onChange={(event) => setPassword(event.target.value)}
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <p className="text-xs mb-5">He olvidado mi contraseña</p>
            <button
              className="mr-3 inline-block rounded bg-black px-6 py-4 text-xs font-medium uppercase leading-normal text-white rounded-xl w-full mb-5">
              Iniciar sesión
            </button>
            <div className="flex w-full justify-between">
              <span className="flex text-xs mb-5">¿Todavía no tienes una cuenta?</span>
              <Link to="/sign-up">
                <span className="flex text-xs mb-5 ml-auto underline">Regístrate</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export { SignIn };