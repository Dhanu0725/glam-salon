import React from 'react';
import './VideoModal.css';

const VideoModal = ({ src, onClose }) => {
    return (
        <div className="video-modal" onClick={onClose}>
            <button className="close-button" onClick={onClose}>✖</button>
            <video
                className="modal-video"
                controls
                autoPlay
                onEnded={onClose}
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside video
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoModal;
