import { useState } from 'react';
import { Layout } from '../../Components/Layout';

function About() {
  return (
    <Layout>
      <div className="flex w-full h-60 mb-10 mt-20">
        <div className="flex w-1/2 bg-gray-100 dark:bg-slate-800 pl-20 pr-20 h-full items-center justify-center">
            <p className="font-bold text-xl">
              Ella es Tsuki
            </p>
        </div>
      <div className="flex-row w-1/2 h-full bg-gray-300 dark:bg-slate-700">
        <div className="flex w-full h-full justify-center items-center">
          <img src="/tsuki.png" alt="Imagen de una gatita" className="h-52 w-52" />
        </div>
      </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex flex-col w-1/2 justify-start">
          <p><span className="font-bold">Tsuki</span> es la gatita que inspiró la creación de este sistema.</p>
          <p>Ella tuvo enfermedad renal crónica después de haber perdido la funcionalidad de uno de sus riñones debido a una hidronefrosis.</p>
          <p><span className="font-bold">Fue una gatita muy amada.</span> En nuestro empeño por controlar de mejor forma su enfermedad, tratamos de llevar un registro de parámetros de su salud como la toma de agua o de comida.</p>
          <p>Este sistema surgió como una solución a nuestra necesidad de sistematizar los registros de forma que pudiéramos guardarlos cómodamente, revisarlos y analizarlos para llevar un mejor control de su salud.</p>
          <p className="mt-5">Esperamos que este sistema sea de utilidad a todos aquellos que, por el motivo que sea, tienen la misma necesidad que dio origen a este sistema.</p>
        </div>
      </div>
    </Layout>
  )
}

export { About };