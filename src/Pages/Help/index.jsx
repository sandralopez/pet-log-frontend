import { useState } from 'react';
import { useAuth } from '../../CustomHooks/useAuth';
import { Layout } from '../../Components/Layout';
import { HomeLayout } from '../../Components/HomeLayout';
import { Question } from '../../Components/Question';

function Help() {
  const { isLogged } = useAuth();
  const [ showQuestion, setShowQuestion ] = useState(null);

  const renderLoggedHelp = () => {
    return (
      <HomeLayout>
        <div className="flex flex-col items-center mr-10 ml-10 h-auto pb-10 pt-3">
          <p className="font-medium text-xl">Ayuda</p>
          <div className="flex flex-col justify-start mt-4 w-full">
            { renderHelp() }
          </div>
        </div>
      </HomeLayout>
    );
  }

  const renderGuestHelp = () => {
    return (
      <Layout>
        <div className="flex flex-col w-full items-center justify-center">
          <p className="font-medium text-xl">Ayuda</p>
          <div className="flex flex-col w-1/2 justify-start mt-4">
            { renderHelp() }
          </div>
        </div>
      </Layout>
    )
  }

  const handleShowQuestion = (question) => {
    if (showQuestion !== null) {
      setShowQuestion(question);
    }
    else {
      setShowQuestion(null);
    }
  }

  const renderHelp = () => {
    return (
      <>
        <Question 
          question="¿Qué es PetLog?"
          response={
            <div>
              <p>PetLog es un sistema que te permite registrar datos de salud de tus mascotas para analizar sus hábitos y controlar su salud. Este sistema te permitirá tener todos los datos a mano para que puedas analizarlos y realizar seguimiento. De esta forma se facilita el registro de observaciones acerca de la salud de tu mascota que hará más sencilla la comunicación con su veterinario.</p>
              <p>Además, PetLog te permite crear recordatorios de fechas relevantes para tu mascota, como próximas citas veterinarias, fechas de tratamientos o vacunas. Recibirás notificaciones en la plataforma cuando falten menos de 7 días y menos de 3 días para la fecha del recordatorio.</p>
            </div>
          }
        />
        <Question 
          question="¿Cómo me registro en PetLog?"
          response={
            <div>
              <p>Para registrarte en PetLog tienes que pulsar el botón 'Regístrate' que se encuentra en la parte superior derecha de la página y rellenar el formulario de registro. Verás que la información que se pide es mínima, basta con un correo electrónico, un nombre de usuario de tu elección y la contraseña para que puedas acceder a PetLog.</p>
            </div>
          }
        />

        {
          isLogged && 
            <>
              <Question 
                question="¿Cómo registro a mis mascotas?"
                response={
                  <div>
                    <p>Para que puedas utilizar PetLog es necesario que primero registres a tus mascotas. Para eso, una vez que ya tengas tu cuenta de usuario sólo tienes que pulsar sobre 'Mis mascotas' en el menú lateral y hacer click sobre el botón 'Añadir nueva'.</p>
                    <p>Verás un pequeño formulario donde se te pedirá el nombre de tu mascota, su especie y su fecha de nacimiento. Al guardar el formulario volverás al listado de tus mascotas, desde donde podrás crear otra mascota, modificar la información de las que ya estén registradas o eliminar mascotas.</p>
                  </div>
                }
              />
              <Question 
                question="¿Qué son las etiquetas?"
                response={
                  <div>
                    <p>Las etiquetas son los ítems que vas a registrar. Por ejemplo, si vas a registrar la cantidad de comida que come tu mascota primero necesitarás crear la etiqueta 'Comida'. Las etiquetas se componen del nombre de la etiqueta, el tipo de dato que va a almacenar (texto o números), la undiad de medida y la unidad de tiempo a la que hace referencia.</p>
                    <p>Vamos a verlo con un ejemplo. Si quiero registrar la cantidad de comida que come diariamente mi mascota en primer lugar tendré que crear la etiqueta 'Comida'. Para crear una etiqueta es necesario seleccionar 'Etiquetas' desde el menú lateral y pulsar sobre el botón 'Añadir nueva'. </p>
                    <p>Una vez en el formulario de etiquetas, ponemos el nombre de la etiqueta, en este caso, 'Comida'. A continuación se nos pide seleccionar el tipo de dato. Si voy a registrar cantidad de comida en gramos, selecciono 'Número'. En nuestro caso necesitaremos seleccionar 'Unidad de medida' para establecer que estamos hablando de gramos (gr). Finalmente, como el registro de comida será diario seleccionamos 'Unidad de tiempo' y ponemos 'día'.</p>
                    <p>Vamos a ver otro ejemplo. Queremos crear una etiqueta 'Estado de ánimo' para registrar el estado de ánimo de una mascota. Para ello, ponemos el nombre 'Estado de ánimo'. Con respecto al tipo de dato, ponemos 'Texto' ya que vamos a almacenar categorías como 'bueno', 'triste', 'alegre'. Dejamos desmarcada la unidad de medida ya que no hay una unidad de medida que aplique a esta etiqueta. Como el estado de ánimo lo definiremos para toda la semana, marcamos 'Unidad de tiempo' y escribimos 'semana'.</p>
                    <p>Las etiquetas son muy flexibles y permiten muchas combinaciones. Esperamos que de esta forma se adapte a muchas situaciones y que sea posible registrar cualquier ítem que puedas necesitar.</p>
                  </div>
                }
              />
              <Question 
                question="¿Cómo creo registros?"
                response={
                  <div>
                    <p>Para crear un registro primero es necesario seleccionar 'Registros' en el menú lateral. Verás que aparece la pantalla con el listado de registros almacenados, donde podrás ver la información filtrada por mascota y, si lo deseas, por etiqueta.</p>
                    <p>Para crear un registro nuevo tienes que hacer click sobre el botón 'Añadir nuevo'. Verás que aparece el formulario de introducción de un registro. En primer lugar es necesario seleccionar la etiqueta a la que hace referencia el registro. Para ello hay que hacer click sobre la etiqueta. A continuación, selecciona la mascota a la que corresponda el registro, introduce el valor del registro (por ejemplo, si estamos registrando gramos de comida introduciríamos el número de gramos que comió ese día, o si estamos registrando el estado de ánimo introduciríamos una palabra que lo represente). Introduce la fecha del registro y el detalle de la observación. Para guardarla, pulsa sobre el botón 'Guardar'. </p>
                  </div>
                }
              />
              <Question 
                question="¿Cómo visualizo las gráficas?"
                response={
                  <div>
                    <p>Para visualizar las gráficas es necesario seleccionar la opción 'Gráficas' en el menú lateral. Podrás visualizar las gráficas seleccionando la mascota y la etiqueta que desees visualizar. </p>
                  </div>
                }
              />
              <Question 
                question="¿Cómo hago recordatorios?"
                response={
                  <div>
                    <p>Para crear un recordatorio es necesario seleccionar la opción 'Recordatorios' en el menú lateral. Aparecerá la pantalla de Recordatorios, donde podrás visualizar los recordatorios vigentes y los ya pasados en pestañas diferentes. Para crear un recordatorio nuevo es necesario hacer click sobre el botón 'Añadir nuevo'.</p>
                    <p>Verás un pequeño formulario donde se te pedirá seleccionar el nombre de la mascota a la que corresponda el recordatorio. A continuación, introduce el asunto del recordatorio. Te aconsejamos que sea descriptivo, ya que este asunto es el que se mostrará en la notificación. Finalmente introduce la fecha y el detalle del recordatorio. Para guardarlo haz click sobre el botón 'Guardar'.</p>
                  </div>
                }
              />
              <Question 
                question="¿Cómo funcionan las notificaciones?"
                response={
                  <div>
                    <p>En la parte superior derecha de la pantalla verás el ícono de una campana. Es el ícono de las notificaciones. Cuando tengas recordatorios cuya fecha esté dentro de los próximos 7 días o 3 días, esta campana cambiará de color y si haces click sobre ella verás la notificación, la mascota y la fecha del recordatorio.</p>
                    <p>Si la campana es naranja, el recordatorio es para los próximos 7 días. Si es roja el recordatorio es para los próximos 3 días. Por cada recordatorio recibirás dos notificaciones, una para a los 7 días o menos y otra a los 3 días o menos para evitar que se te pase por alto. Cuando leas las notificaciones pendientes, la campana cambiará de color a gris.</p>
                  </div>
                }
              />
              <Question 
                question="¿Cómo modifico mi contraseña o mi correo electrónico?"
                response={
                  <div>
                    <p>Para crear un recordatorio es necesario seleccionar la opción 'Mi cuenta' en el menú lateral. Aparecerá la pantalla de Información de la cuenta, donde podrás visualizar y modificar tus datos.</p>
                    <p>Para editar tu correo electŕonico tienes que pulsar sobre el botón 'Editar'. Se te pedirá además que introduzcas tu contraseña para confirmar la edición de tus datos.</p>
                    <p>Para cambiar tu contraseña tienes que pulsar sobre el botón 'Cambiar contraseña'. Se te pedirá la contraseña antigua y que introduzcas dos veces la nueva.</p>
                  </div>
                }
              />
            </>
        }

        <Question 
          question="Quiero dejar un comentario, observación o sugerencia"
          response={
            <div>
              <p>Para dejarnos un comentario, observación o sugerencia es necesario seleccionar la opción 'Contacto' en el menú lateral que aparece al iniciar sesión como usuario registrado. Es decir, sólo tendrás acceso a esta opción si eres un usuario registrado en el sistema.</p>
            </div>
          }
        />
      </>
    )
  }

  const renderView = () => isLogged ? renderLoggedHelp() : renderGuestHelp();

  return (
    renderView()
  )}

export { Help };