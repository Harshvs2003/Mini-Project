
import "../styles/videoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2>We are providing best home cooked food delivery service.</h2>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/kRCH8kD1GD0"
          title="Food Promo Video - Manual Mode Productions"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
