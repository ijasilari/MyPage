import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const SkillButton = (props) => {
    const [showModal, setShowModal] = useState(false);
    const sisältö = props.sisältö;
    const otsikko = props.otsikko;

    const showModalHandler = () => {
        setShowModal(true);
      };
    
      const cancelModalHandler = () => {
        setShowModal(false);
      };

    return(
        <div>
            <button onClick={showModalHandler}>{otsikko}</button>
            {showModal && <Modal onCancel={cancelModalHandler} sisältö={sisältö}/>}
            {showModal ? <Backdrop onClick={cancelModalHandler} /> : null}
        </div>
        
    );
};

export default SkillButton;