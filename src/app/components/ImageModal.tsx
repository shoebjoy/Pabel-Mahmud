import React from "react";
import Modal from "react-modal";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 9999, // Ensure it appears above other content
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          position: "unset",
          border: "none",
          background: "none",
          overflow: "hidden",
        },
      }}
    >
      <div>
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          
        </button>
        <img
          src={imageUrl}
          alt="Image"
          className="max-w-full max-h-full"
          style={{ maxHeight: "80vh", maxWidth: "80vw" }} // Set max height and width
        />
      </div>
    </Modal>
  );
};

export default ImageModal;