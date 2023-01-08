import { useRef } from "react";

const Modal = (props) => {
    
    let teksti = props.sisältö;

    return (
      <div className="modal">
        <p>{teksti}</p>
      </div>
    );
  };
  
  export default Modal;