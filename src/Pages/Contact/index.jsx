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
      <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
        <p className="font-medium text-xl">Contacto</p>
        <p className="font-light text-medium mt-10 mb-10 text-center ml-10 mr-10">Si quieres dejarnos algún comentario, observación o sugerencia puedes enviarlo a través de este formulario.</p>
        <div className="flex justify-center w-1/2">
          {
            alert.type && <Alert alert={alert} setAlert={setAlert} /> 
          }
        </div>
        <div className="flex flex-col w-80 justify-start">
          <form className="w-full" onSubmit={handleCommentSubmit}>
            <textarea 
              id="comment"
              name="comment"
              onChange={(event) => setComment(event.target.value)}
              value={comment}
              placeholder="Escribe aquí tu comentario"
              rows="5"
              minLength="3"
              maxLength="512"
              required
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