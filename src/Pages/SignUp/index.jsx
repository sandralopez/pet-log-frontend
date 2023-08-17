import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout';
import { Alert } from '../../Components/Alert';
import { registerUser } from '../../Services/user';

function SignUp() {
  const [formData, setFormData] = useState({email: "", username: "", password: "", repeatPassword: ""});
  const [alert, setAlert] = useState({type: "", message:""});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value 
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(formData);

      if (response.status === 'error') {
        throw Error('Ha ocurrido un error al registrar al usuario');
      } 
      else {
        setAlert(() => ({
          type: "success",
          message: "Usuario registrado correctamente"
        }));
      }

      setFormData({email: "", username: "", password: "", repeatPassword: ""});
    }
    catch(error) {
        setAlert(() => ({
          type: "error",
          message: "Ha ocurrido un error al registrar al usuario"
        }));
    }
  }

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-80">
          <p className="mb-10 font-medium text-xl">Crea una cuenta</p>
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }
          <form className="items-center" onSubmit={handleSubmit}>
            <label 
              htmlFor="email" 
              className="label">
                Email: 
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="Dirección de email" 
              onChange={handleChange}
              value={formData.email}
              className="input" />
            <label 
              htmlFor="username" 
              className="label">
                Nombre de usuario: 
            </label>
            <input 
              type="text" 
              id="username" 
              name="username"
              placeholder="Nombre de usuario" 
              onChange={handleChange}
              value={formData.username}
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
              placeholder="Minimo 8 caracteres" 
              onChange={handleChange}
              value={formData.password}
              className="input" />
            <label 
              htmlFor="repeatPassword" 
              className="label">
                Repetir contraseña: 
            </label>
            <input 
              type="password" 
              id="repeatPassword" 
              name="repeatPassword"
              placeholder="Repite la contraseña" 
              onChange={handleChange}
              value={formData.repeatPassword}
              className="input" />
            <button
              type="submit"
              className="button button-full">
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