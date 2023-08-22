import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { Hero } from '../../Components/Hero';
import { ListBulletIcon } from '@heroicons/react/24/solid';
import { ChartBarIcon } from '@heroicons/react/24/solid';
import { ClockIcon } from '@heroicons/react/24/solid';

function Landing() {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-row space-x-4 justify-center h-auto">
          <Card 
            title=""
            description="Registra de forma sencilla los eventos de tu mascota para analizar sus hábitos y controlar su salud." 
          >
            <div className="flex justify-center">
              <ListBulletIcon className="h-10 w-10" />
            </div>
          </Card>
          <Card 
            title=""
            description="Visualiza las gráficas y obtén informes de los eventos registrados para realizar  seguimiento y facilitar la comunicación con su veterinario." 
          >
            <div className="flex justify-center">
              <ChartBarIcon className="h-10 w-10" />
            </div>
          </Card>
          <Card 
            title=""
            description="Programa recordatorios para sus tratamientos y vacunas y recibe notificaciones cuando se acerque la fecha de la próxima cita veterinaria. " 
          >
            <div className="flex justify-center">
              <ClockIcon className="h-10 w-10" />
            </div>
          </Card>
      </div>
    </Layout >
  )
}

export { Landing };