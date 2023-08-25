import { useState } from 'react';
import { Alert } from '../../Components/Alert';
import { Modal } from '../../Components/Modal';
import { HomeLayout } from '../../Components/HomeLayout';
import { addComment } from '../../Services/comment';

function Contact() {
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
    <HomeLayout>
      <div className="flex flex-col w-full items-center justify-center">
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
    </HomeLayout>
  )
}

export { Contact };