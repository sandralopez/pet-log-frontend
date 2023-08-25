import { useState } from 'react';
import { Layout } from '../../Components/Layout';
import { addComment } from '../../Services/comment';
import { Alert } from '../../Components/Alert';

function About() {
  const [ comment, setComment ] = useState("");
  const [ alert, setAlert ] = useState({type: "", message:""});

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await addComment({ comment: comment });
      if (response.status === 'error') {
        throw Error('Ha ocurrido un error al enviar el comentario');
      } 
      else {
        setComment("");

        setAlert(() => ({
          type: "success",
          message: "Comentario enviado correctamente"
        }));
      }
    }      
    catch(error) {
      setAlert(() => ({
        type: "error",
        message: "Ha ocurrido un error al enviar el comentario"
      }));
    }
  }

  return (
    <Layout>
      <div className="flex w-full h-60 mb-10 mt-20">
        <div className="flex w-1/2 bg-gray-100 dark:bg-slate-800 pl-20 pr-20 h-full items-center justify-center">
            <p className="font-bold text-xl">
              Ella es Tsuki
            </p>
        </div>
        <div className="flex-row w-1/2 h-full bg-gray-300 dark:bg-slate-700">

        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex flex-col w-1/2 justify-start">
          <p><span className="font-bold">Tsuki</span> es la gatita que inspiró la creación de este sistema.</p>
          <p>Ella tiene enfermedad renal crónica después de haber perdido la funcionalidad de uno de sus riñones debido a una hidronefrosis.</p>
          <p><span className="font-bold">Es una gatita muy amada.</span> En nuestro empeño por controlar de mejor forma su enfermedad, tratamos de llevar un registro de parámetros de su salud como la toma de agua o de comida.</p>
          <p>Este sistema surge como una solución a nuestra necesidad de sistematizar los registros de forma que podamos guardarlos cómodamente, revisarlos y analizarlos para llevar un mejor control de su salud.</p>
          <p className="mt-5">Esperamos que este sistema sea de utilidad a todos aquellos que, por el motivo que sea, desean llevar un registro de distintos parámetros de salud de sus amados animales.</p>
        </div>
        <div className="flex justify-center w-1/2">
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }
        </div>
        <div className="flex flex-col w-1/2 mt-5 justify-start">
          <p>Si quieres dejarnos algún <span className="font-bold">comentario, observación o sugerencia</span>, puedes hacérnosla llegar a través de este formulario.</p>
          <form className="mt-5 w-full" onSubmit={handleCommentSubmit}>
            <textarea 
              id="comment"
              name="comment"
              onChange={(event) => setComment(event.target.value)}
              value={comment}
              placeholder="Escribe aquí tu comentario"
              >
            </textarea>
            <button className="button button-full">Enviar</button>
          </form>
      </div>
        </div>
    </Layout>
  )
}

export { About };