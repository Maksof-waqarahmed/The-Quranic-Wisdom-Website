import React, { useState, useEffect } from "react";
import "./videoModal.css";

const VideoModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the video has already been closed by the user
    const hasSeenVideo = localStorage.getItem("hasSeenVideo");

    if (!hasSeenVideo) {
      // If not closed before, show the modal
      setShowModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    // When user closes the modal, store flag in localStorage
    localStorage.setItem("hasSeenVideo", "true");
    setShowModal(false);
  };

  const handleOverlayClick = (e) => {
    // Close modal if user clicks on overlay (background) but not the content
    if (e.target.className === "modal") {
      handleCloseModal();
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal" onClick={handleOverlayClick}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <video width="100%" height="100%" controls autoPlay>
            <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
