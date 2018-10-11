import React from 'react';
import './Modal.css';

const Modal = ({ handleClose, open, children }) => {
  const showHideClassName = open ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
          <a className="modal_main__button" onClick={handleClose}>&times;</a>
          {children}
      </section>
    </div>
  );
};

export default Modal    ;
