import { Link } from 'react-router-dom';
import { HomeLayout } from '../../Components/HomeLayout';

function Log() {
  return (
    <HomeLayout>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-80">
          <p className="mb-5 font-medium text-xl">Añade un nuevo registro</p>
          <TagList />
          <form className="items-center w-full">
            <label htmlFor="pet" className="font-light text-sm">Mascota: </label>
            <select id="pet" className="w-full mb-5 border border-black p-3 rounded-xl">
              <option value="0">Seleccione...</option>
              <option value="1">Tsuki</option>
              <option value="2">Woody</option>
              <option value="3">Gatiti</option>
              <option value="4">Gatinchi</option>
            </select>
            <label 
              htmlFor="value" 
              className="font-light text-sm">
                Valor: 
            </label>
            <input 
              type="text" 
              id="value" 
              placeholder="Valor" 
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <label 
              htmlFor="date" 
              className="font-light text-sm">
                Fecha: 
            </label>
            <input 
              type="date" 
              id="date" 
              placeholder="Fecha" 
              className="w-full mb-5 border border-black p-3 rounded-xl" />
            <label 
              htmlFor="detail" 
              className="font-light text-sm">
                Detalle: 
            </label>
            <textarea 
              placeholder="Observaciones" 
              id="detail" 
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

export { Log };