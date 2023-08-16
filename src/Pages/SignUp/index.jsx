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
              className="label">
                Email: 
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="Dirección de email" 
              className="input" />
            <label 
              htmlFor="username" 
              className="label">
                Nombre de usuario: 
            </label>
            <input 
              type="text" 
              id="username" 
              placeholder="Nombre de usuario" 
              className="input" />
            <label 
              htmlFor="password" 
              className="label">
                Contraseña: 
            </label>
            <input 
              type="password" 
              id="password" 
              placeholder="Minimo 8 caracteres" 
              className="input" />
            <label 
              htmlFor="repeatPassword" 
              className="label">
                Repetir contraseña: 
            </label>
            <input 
              type="password" 
              id="repeatPassword" 
              placeholder="Repite la contraseña" 
              className="input" />
            <button
              type="button"
              className="button">
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