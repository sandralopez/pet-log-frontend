import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeLayout } from '../../Components/HomeLayout';

function Tag() {
  const [useUnitMeasure, setUseUnitMeasure] = useState(false);
  const [useUnitTime, setUseUnitTime] = useState(false);

  const renderUnitMeasure = () => {
    if (useUnitMeasure) {
      return (
        <>
          <label 
            htmlFor="unitMeasure" 
            className="font-light text-sm">
              Unidad de medida: 
          </label>
          <input 
            type="text" 
            id="unitMeasure" 
            placeholder="Kg, ml, gr..." 
            className="w-full mb-5 border border-black p-3 rounded-xl" />
        </>
      )
    }
    
    return null;
  }

  const renderUnitTime = () => {
    if (useUnitTime) {
      return (
        <>
          <label 
            htmlFor="unitTime" 
            className="font-light text-sm">
              Unidad de tiempo: 
          </label>
          <input 
            type="text" 
            id="unitTime" 
            placeholder="Día, mes..." 
            className="w-full mb-5 border border-black p-3 rounded-xl" />
        </>
      )

      return null;
    }
  }

  return (
    <HomeLayout>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-80">
          <p className="mb-5 font-medium text-xl">Añade una nueva etiqueta</p>
          <form className="items-center w-full">
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
              htmlFor="datatype" 
              className="font-light text-sm">
                Tipo de dato: 
            </label>
            <select id="datatype" className="w-full mb-5 border border-black p-3 rounded-xl">
              <option value="0">Seleccione...</option>
              <option value="1">Número</option>
              <option value="2">Texto</option>
            </select>

            <div className="flex flex-row mb-5">
              <input 
                type="checkbox" 
                id="useUnitMeasure" 
                name="useUnitMeasure"
                className="accent-black w-5 h-5 rounded-xl mr-2"
                onChange={ () => setUseUnitMeasure(!useUnitMeasure) }
              />
              <label 
                htmlFor="useUnitMeasure" 
                className="font-light text-sm">
                Usar unidad de medida: 
              </label>
            </div>

            { renderUnitMeasure() }

            <div className="flex flex-row mb-5">
              <input 
                type="checkbox" 
                id="useUnitTime" 
                name="useUnitTime"
                className="accent-black w-5 h-5 rounded-xl mr-2"
                onChange={ () => setUseUnitTime(!useUnitTime) }
              />
              <label 
                htmlFor="useUnitTime" 
                className="font-light text-sm">
                Usar unidad de tiempo: 
              </label>
            </div>

            { renderUnitTime() }

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

export { Tag };