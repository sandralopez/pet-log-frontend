import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout';

function SignIn() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-80">
          <p className="mb-10 font-medium text-xl">Inicio de sesión</p>
          <form className="items-center">
            <label 
              htmlFor="username" 
              className="font-light text-sm">
                Nombre de usuario: 
            </label>
            <input 
              type="text" 
              id="username" 
              placeholder="Nombre de usuario" 
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <label 
              htmlFor="password" 
              className="font-light text-sm">
                Contraseña: 
            </label>
            <input 
              type="text" 
              id="password" 
              placeholder="Contraseña" 
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <p className="text-xs mb-5">He olvidado mi contraseña</p>
            <Link
              to="/home"
            >
              <button
                type="button"
                className="mr-3 inline-block rounded bg-black px-6 py-4 text-xs font-medium uppercase leading-normal text-white rounded-xl w-full mb-5">
                Iniciar sesión
              </button>
            </Link>
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