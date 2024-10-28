import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({open , children ,onclose}) {
  const dialog = useRef();

  useEffect(() => {
    if(open){
      dialog.current.showModal();
    }else{
      dialog.current.close();
    }
  },[open])
  //If useffact has any depndencies which is related to app component or changing in app component so it needs dependencies array
  //We need to add the dependencies in array of useEffect
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onclose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
