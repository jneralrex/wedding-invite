import React from 'react'
import '../Styles/Modal.css'
import { TfiClose } from "react-icons/tfi";


const Modal = ({ closeModal }) => {

  return (
    <div>
        <div className="modal-board">
          <div className="modal-inner">
          < TfiClose onClick={closeModal} size={25} style={{ color: "white", zIndex: "999", position: "fixed", left: "91%", top: "9" }} />
            <div className="modal-content">
              We are getting married welcome
            </div>
          </div>
        </div>
    </div>
  )
}

export default Modal