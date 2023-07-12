import { Link } from 'react-router-dom';
import { HomeLayout } from '../../Components/HomeLayout';
import { Table } from '../../Components/Table';
import { TagCard } from '../../Components/TagCard';

function MyTags() {
  const columns = ['Etiqueta', 'Tipo de dato', 'Unidad de medida', 'Unidad de tiempo'];
  const rows = [
    ['Comida', 'Número', 'gr', 'día'],
    ['Agua', 'Número', 'ml', 'día'],
    ['Paseos', 'Número', 'veces', 'día'],
    ['Peso', 'Número', 'kg', 'mes'],
    ['Estado de ánimo', 'Texto', '-', 'día'],
  ];


  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Etiquetas</p>
        <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Gestiona las etiquetas de aquello que quieres registrar para adaptar el registro a tus necesidades.</p>
        <Link 
          to="/my-tags/add"
        >
          <button
            type="button"
            className="mr-3 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white rounded-xl">
            Añadir nueva
          </button>
        </Link>
        <div className="grid grid-cols-3 gap-x-4 gap-y-20 mt-10">
          <TagCard tag={"Comida"} datatype={"Número"} unitMeasure={"gr"} unitTime={"día"} />
          <TagCard tag={"Agua"} datatype={"Número"} unitMeasure={"ml"} unitTime={"día"} />
          <TagCard tag={"Paseos"} datatype={"Número"} unitMeasure={"veces"} unitTime={"día"} />
          <TagCard tag={"Peso"} datatype={"Número"} unitMeasure={"kg"} unitTime={"mes"} />
          <TagCard tag={"Estado de ánimo"} datatype={"Texto"} unitMeasure={"-"} unitTime={"día"} />
        </div>
      </div>
    </HomeLayout>
  )
}

export { MyTags };