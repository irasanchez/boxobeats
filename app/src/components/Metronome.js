import React from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
const Metronome = ({ modalState, toggleModal }) => {
  return (
    <ReactModal
      isOpen={modalState}
      onRequestClose={toggleModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <p>test</p>
    </ReactModal>
  );
};

export default Metronome;
