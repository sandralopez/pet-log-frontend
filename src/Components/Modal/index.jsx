import { useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../../Context/ModalContext';

function Modal({ confirmMessage, onConfirm }) {
  const { setShowModal } = useContext(ModalContext);

  return (
    <>
      createPortal(
        <div className="bg-white/80 flex justify-center items-center fixed inset-x-0 inset-y-0">
          <div className="flex items-center content-center bg-white w-80 h-60 rounded-xl shadow-slate-500 shadow-2xl">
            <div className="flex flex-col items-center w-full">
              <p className="text-center">{confirmMessage}</p>
              <div className="mt-5">
                <button
                  type="button"
                  className="button"
                  onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button
                  type="button"
                  className="button bg-red-600"
                  onClick={ onConfirm }>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>,

        document.getElementById('modal')
      )
    </>
  );
}

export { Modal };