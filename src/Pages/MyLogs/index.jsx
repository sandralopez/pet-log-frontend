import { Link } from 'react-router-dom';
import { HomeLayout } from '../../Components/HomeLayout';
import { Pet } from '../../Components/Pet';
import { Table } from '../../Components/Table';

function MyLogs() {
  const columns = ['Mascota', 'Etiqueta', 'Valor'];
  const rows = [
    ['Tsuki', 'Agua', '120 ml'],
    ['Tsuki', 'Agua', '100 ml'],
  ];

  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Registros</p>
        <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Añade y visualiza los registros de tus mascotas.</p>
        <Link 
          to="/my-logs/add"
        >
          <button
            type="button"
            className="mr-3 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white rounded-xl">
            Añadir nuevo
          </button>
        </Link>
        <div className="rounded-xl overflow-auto w-full">
          <Table columns={columns} rows={rows} />
        </div>
      </div>
    </HomeLayout>
  )
}

export { MyLogs };