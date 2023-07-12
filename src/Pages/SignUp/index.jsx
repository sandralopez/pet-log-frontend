import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout';

function SignUp() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-80">
          <p className="mb-10 font-medium text-xl">Crea una cuenta</p>
          <form className="items-center">
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
              placeholder="Nombre de usuario" 
              className="w-full mb-5 border border-black p-3 rounded-xl" />
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
              className="mr-3 inline-block rounded bg-black px-6 py-4 text-xs font-medium uppercase leading-normal text-white rounded-xl w-full mb-5">
              Crear cuenta
            </button>
            <div className="flex w-full justify-between">
              <span className="flex text-xs mb-5">¿Ya eres usuario?</span>
              <Link
                to="/sign-in"
              >
                <span className="flex text-xs mb-5 ml-auto underline">Iniciar sesión</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export { SignUp };