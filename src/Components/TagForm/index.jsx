import { useState, useEffect } from 'react';

function TagForm({ onSubmit, initialValues }) {
  const [formData, setFormData] = useState(initialValues);
  const [useUnitMeasure, setUseUnitMeasure] = useState(false);
  const [useUnitTime, setUseUnitTime] = useState(false);

  useEffect(() =>{
    if (formData.measureUnit.length > 0) {
      setUseUnitMeasure(true);
    }

    if (formData.timeUnit.length > 0) {
      setUseUnitTime(true);
    }
  }, []);

  const renderUnitMeasure = () => {
    if (useUnitMeasure) {
      return (
        <>
          <label 
            htmlFor="measureUnit" 
            className="label">
              Unidad de medida: 
          </label>
          <input 
            type="text" 
            id="measureUnit" 
            name="measureUnit"
            placeholder="Kg, ml, gr..." 
            value={formData.measureUnit}
            onChange={handleChange}
            className="input" />
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
            htmlFor="timeUnit" 
            className="label">
              Unidad de tiempo: 
          </label>
          <input 
            type="text" 
            id="timeUnit" 
            name="timeUnit"
            placeholder="Día, mes..."
            value={formData.timeUnit}
            onChange={handleChange} 
            className="input" />
        </>
      )

      return null;
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value 
    }));
  };

  const handleTagSubmit =  (event) => {
    event.preventDefault();

    onSubmit(formData);
  }

  return (
    <form className="items-center w-80">
      <label 
        htmlFor="name" 
        className="label">
          Nombre: 
      </label>
      <input 
        type="text" 
        id="name" 
        name="name"
        placeholder="Nombre" 
        onChange={handleChange}
        value={formData.name}
        className="input" />
      <label 
        htmlFor="datatype" 
        className="label">
          Tipo de dato: 
      </label>
      <select 
        id="datatype" 
        name="datatype" 
        value={formData.datatype} 
        onChange={handleChange} 
        className="input">
          <option value="0">Seleccione...</option>
          <option value="Numero">Número</option>
          <option value="Texto">Texto</option>
      </select>

      <div className="flex flex-row mb-5">
        <input 
          type="checkbox" 
          id="useUnitMeasure" 
          name="useUnitMeasure"
          className="accent-black w-5 h-5 rounded-xl mr-2"
          onChange={ () => setUseUnitMeasure(!useUnitMeasure) }
          checked={useUnitMeasure}
        />
        <label 
          htmlFor="useUnitMeasure" 
          className="label">
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
          checked={useUnitTime}
        />
        <label 
          htmlFor="useUnitTime" 
          className="label">
          Usar unidad de tiempo: 
        </label>
      </div>

      { renderUnitTime() }

      <button
        type="button"
        onClick={handleTagSubmit}
        className="button button-full">
        Guardar
      </button>
    </form>
  )
}

export { TagForm };