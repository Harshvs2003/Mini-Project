import React, { useRef, useState } from "react";
import "../styles/videoSection.css";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="video-section">
      <h2>We are providing best home cooked food delivery service.</h2>
        <iframe 
        width="1006" 
        height="400" 
        src="https://www.youtube.com/embed/kRCH8kD1GD0" 
        title="Food Promo Video - Manual Mode Productions" 
        // frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" ></iframe>
    </section>
  );
};
    
export default VideoSection;
