import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';

import { Hero } from '../../Components/Hero';

function Landing() {
  return (
    <Layout>
      <Hero />
      <div className="flex flex-row space-x-4 justify-center h-auto">
        <Card 
          icon="ICON" 
          title="Registra" 
          description="Registra de forma sencilla los eventos de tu mascota para analizar sus hábitos y controlar su salud." 
        />
        <Card 
          icon="ICON" 
          title="Haz seguimiento" 
          description="Visualiza las gráficas y obtén informes de los eventos registrados para realizar  seguimiento y facilitar la comunicación con su veterinario." 
        />
        <Card 
          icon="ICON" 
          title="Recibe recordatorios" 
          description="Programa recordatorios para sus tratamientos y vacunas y recibe notificaciones cuando se acerque la fecha de la próxima cita veterinaria." 
        />
      </div>
    </Layout >
  )
}

export { Landing };