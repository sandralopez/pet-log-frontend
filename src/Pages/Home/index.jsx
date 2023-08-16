import { HomeLayout } from '../../Components/HomeLayout';
import { Card } from '../../Components/Card';
import { ListBulletIcon } from '@heroicons/react/24/solid';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { ClockIcon } from '@heroicons/react/24/solid';

function Home() {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">¡Hola! Te damos la bienvenida a Pet Log</p>
        <p className="font-light text-medium mt-10 text-center ml-10 mr-10">Aquí podrás registrar la información de tu mascota para hacer seguimiento de su salud. Comienza registrando tus mascotas en el apartado ‘Mis mascotas’ para empezar a utilizar Pet Log</p>
        <div className="flex flex-row space-x-4 justify-center h-auto mt-20">
          <Card 
            title=""
            description="Registra de forma sencilla los eventos de tu mascota para analizar sus hábitos y controlar su salud." 
          >
            <div className="flex justify-center">
              <ListBulletIcon className="h-10 w-10 text-gray-700" />
            </div>
          </Card>
          <Card 
            title=""
            description="Visualiza las gráficas y obtén informes de los eventos registrados para realizar  seguimiento y facilitar la comunicación con su veterinario." 
          >
            <div className="flex justify-center">
              <ChartBarIcon className="h-10 w-10 text-gray-700" />
            </div>
          </Card>
          <Card 
            title=""
            description="Programa recordatorios para sus tratamientos y vacunas y recibe notificaciones cuando se acerque la fecha de la próxima cita veterinaria. " 
          >
            <div className="flex justify-center">
              <ClockIcon className="h-10 w-10 text-gray-700" />
            </div>
          </Card>
        </div>
      </div>
    </HomeLayout>
  )
}

export { Home };