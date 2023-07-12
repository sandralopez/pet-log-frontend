import { HomeLayout } from '../../Components/HomeLayout';
import { Card } from '../../Components/Card';

function Home() {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Bienvenido a Pet Log</p>
        <p className="font-light text-medium mt-10 text-center ml-10 mr-10">Aquí podrás registrar la información de tu mascota para hacer seguimiento de su salud. Comienza registrando tus mascotas en el apartado ‘Mis mascotas’ para empezar a utilizar Pet Log</p>
        <div className="flex flex-row space-x-4 justify-center h-auto mt-20">
          <Card 
            icon="ICON" 
            title=""
            description="Registra de forma sencilla los eventos de tu mascota para analizar sus hábitos y controlar su salud." 
          />
          <Card 
            icon="ICON" 
            title=""
            description="Visualiza las gráficas y obtén informes de los eventos registrados para realizar  seguimiento y facilitar la comunicación con su veterinario." 
          />
          <Card 
            icon="ICON" 
            title=""
            description="Programa recordatorios para sus tratamientos y vacunas y recibe notificaciones cuando se acerque la fecha de la próxima cita veterinaria. " 
          />
        </div>
      </div>
    </HomeLayout>
  )
}

export { Home };