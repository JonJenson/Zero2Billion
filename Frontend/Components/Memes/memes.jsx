// Memes.jsx
import React from "react";
import "./memes.css";

const Memes = () => {
  const embedUrl = "https://drive.google.com/file/d/1LxfrWSKkFBZMonDokMuZLAT6hNLE8--m/preview";
  
  return (
    <div className="memes-container">
      <div className="video-player-container">
        <iframe
          className="video-player"
          src={embedUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Embedded video"
        />
      </div>
    </div>
  );
};

export default Memes;
