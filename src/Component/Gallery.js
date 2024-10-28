import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../json/Gallery.json'; // Adjust the path to the actual location of your JSON file
import '../App.css'; // Make sure to import the CSS file

function Gallery() {
    return (
        <div>
            {/* Videos using iframe for YouTube Shorts */}
            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://www.youtube.com/embed/HaQQMKzkWME"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://www.youtube.com/embed/bPnMQGAlfKg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://www.youtube.com/embed/tqo8O8mLdi4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="video-frame"
                width="320"
                height="240"
                src="https://www.youtube.com/embed/scZv7pjWI0U"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            {/* Image Gallery */}
            {images.map((image, index) => (
                <img
                    key={index}
                    className={image.className}
                    src={image.src}
                    alt={image.alt}
                />
            ))}
        </div>
    );
}

export default Gallery;
