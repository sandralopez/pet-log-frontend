import { Link } from 'react-router-dom';
import { HomeLayout } from '../../Components/HomeLayout';

function Pet() {
  return (
    <HomeLayout>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-80">
          <p className="mb-5 font-medium text-xl">Añade una nueva mascota</p>
          <form className="items-center w-full">
            <div className="flex justify-center">
              <div className="mb-5 w-20 h-20 flex justify-center items-center rounded-full bg-gray-300">
                <img src="#" className="rounded-full" />
              </div>
            </div>
            <label 
              htmlFor="name" 
              className="font-light text-sm">
                Nombre: 
            </label>
            <input 
              type="text" 
              id="name" 
              placeholder="Nombre" 
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <label 
              htmlFor="species" 
              className="font-light text-sm">
                Especie: 
            </label>
            <input 
              type="text" 
              id="species" 
              placeholder="Especie" 
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <label 
              htmlFor="birthdate" 
              className="font-light text-sm">
                Fecha de nacimiento: 
            </label>
            <input 
              type="text" 
              id="birthdate" 
              placeholder="Fecha de nacimiento" 
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <button
              type="button"
              className="mr-3 inline-block rounded bg-black px-6 py-4 text-xs font-medium uppercase leading-normal text-white rounded-xl w-full mb-5">
              Añadir
            </button>
          </form>
        </div>
      </div>
    </HomeLayout>
  )
}

export { Pet };