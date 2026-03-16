import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  isSuccess: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content, isSuccess }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-black bg-opacity-80 fixed inset-0"></div>
        <div className="bg-customGray p-10 rounded-lg z-50 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className={`text-lg ${isSuccess ? "text-green-500" : "text-red-500"}`}>
            {content}
          </p>
        </div>
      </div>
    )
  );
};

export default Modal;