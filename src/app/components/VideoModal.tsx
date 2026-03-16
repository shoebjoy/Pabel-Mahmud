import React from "react";
import Modal from "react-modal";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1000, // Increase the zIndex to ensure the modal is on top of other content
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
          {/* You can add an X icon here later if desired */}
        </button>
        <iframe
          title="YouTube video player"
          style={{ width: '54vw', height: '60vh', aspectRatio: '16 / 9' }}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default VideoModal;