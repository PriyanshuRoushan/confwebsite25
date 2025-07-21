import React, { useState } from "react";
import "./tracks.css";
import Description from "./description";

function Tracks() {
  const [showAll, setShowAll] = useState(false);

  const visibleTracks = showAll ? Description : Description.slice(0, 3);

  return (
    <div className="tracks">
    <div className="tracks-container" id="main-tracks">
      <div className="title">Tracks</div><br></br><br></br>

      <div className="track-grid">
        {visibleTracks.map((track) => (
          <div key={track.id} className="track-card">
            <h5 className="tracks">Track {track.id}: {track.title}</h5>
            <p className="track-description">{track.description}</p>
          </div>
        ))}
      </div>

      {Description.length > 4 && (
        <div className="view-more-container">
          <button
            className="view-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Tracks;
