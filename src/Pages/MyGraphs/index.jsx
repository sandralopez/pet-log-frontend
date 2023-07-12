import { HomeLayout } from '../../Components/HomeLayout';

function MyGraphs() {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Mis Gráficas</p>
        <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Revisa las gráficas para comprobar la evolución de tus mascotas a lo largo del tiempo.</p>
      </div>
    </HomeLayout>
  )
}

export { MyGraphs };