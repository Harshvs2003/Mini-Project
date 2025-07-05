import React from "react";
import "../styles/modal.css";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Request Dish</h3>
        <input type="text" placeholder="Enter dish name" />
        <div className="modal-buttons">
          <button onClick={closeModal} className="cancel-btn">Cancel</button>
          <button onClick={closeModal} className="submit-btn">Submit Request</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
