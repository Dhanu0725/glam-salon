import React, { useState } from 'react';
import './Gallery.css';
import galleryImage0 from '../assets/gallery.jpg';
import galleryImage1 from '../assets/gallery1.jpg';
import galleryImage2 from '../assets/gallery2.jpg';
import galleryImage3 from '../assets/gallery3.jpg';
import galleryImage4 from '../assets/gallery4.jpg';
import galleryImage5 from '../assets/gallery5.jpg';
import galleryImage6 from '../assets/gallery6.jpg';
import galleryImage7 from '../assets/gallery7.jpg';
import galleryImage8 from '../assets/gallery8.jpg';
import galleryImage9 from '../assets/gallery9.jpg';
import galleryImage10 from '../assets/gallery10.jpg';
import galleryImage11 from '../assets/gallery11.jpg';
import galleryImage12 from '../assets/gallery12.jpg';
import galleryImage13 from '../assets/gallery13.jpg';
import galleryImage14 from '../assets/gallery14.jpg';
import galleryImage15 from '../assets/gallery15.jpg';
import galleryImage16 from '../assets/gallery16.jpg';
import galleryImage17 from '../assets/gallery17.jpg';
import galleryImage18 from '../assets/gallery18.jpg';
import galleryImage19 from '../assets/gallery20.jpg';
import galleryImage20 from '../assets/gallery22.jpg';
import galleryImage21 from '../assets/gallery23.jpg';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';
import VideoModal from './VideoModal';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('photos');
    const [playingVideo, setPlayingVideo] = useState(null);

    const photos = [
        galleryImage0,
        galleryImage1,
        galleryImage2,
        galleryImage3,
        galleryImage4,
        galleryImage5,
        galleryImage6,
        galleryImage7,
        galleryImage8,
        galleryImage9,
        galleryImage10,
        galleryImage11,
        galleryImage12,
        galleryImage13,
        galleryImage14,
        galleryImage15,
        galleryImage16,
        galleryImage17,
        galleryImage18,
        galleryImage19,
        galleryImage20,
        galleryImage21
    ];

    const videos = [
        { src: video1, id: 1 },
        { src: video2, id: 2 },
        { src: video3, id: 3 },
        { src: video4, id: 4 },
        { src: video5, id: 5 }
    ];

    const handlePlayVideo = (videoSrc) => {
        console.log('Playing video:', videoSrc);
        setPlayingVideo(videoSrc);
    };
    
    const handleCloseVideo = () => {
        console.log('Closing video modal');
        setPlayingVideo(null);
    };
    

    return (
        <section className="gallery-section">
            <h2>Gallery</h2>

            <div className="gallery-tabs">
                <button
                    className={activeTab === 'photos' ? 'active-tab' : ''}
                    onClick={() => setActiveTab('photos')}
                >
                    Photos
                </button>
                <button
                    className={activeTab === 'videos' ? 'active-tab' : ''}
                    onClick={() => setActiveTab('videos')}
                >
                    Videos
                </button>
            </div>

            <div className="gallery-content">
                {activeTab === 'photos' && (
                    <div className="gallery-grid">
                        {photos.map((image, index) => (
                            <div key={index} className="gallery-item">
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'videos' && (
                    <div className="gallery-grid">
                        {videos.map((video) => (
                            <div key={video.id} className="video-item">
                                <div className="video-overlay" onClick={() => handlePlayVideo(video.src)}>
                                    <div className="play-button">▶</div>
                                </div>
                                <video className="video-thumbnail" muted>
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {playingVideo && (
                <VideoModal src={playingVideo} onClose={handleCloseVideo} />
            )}
        </section>
    );
};

export default Gallery;
