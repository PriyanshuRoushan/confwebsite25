import React, { useState } from "react";
import "./tracks.css";
import Description from "./description";

function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const openModal = (track) => setSelectedTrack(track);
  const closeModal = () => setSelectedTrack(null);

  return (
    <div className="tracks-container" id="main-tracks">
      <div className="title">Conference Scope</div>
      {Description.map((track) => (
        <div
          key={track.id}
          className="track-card"
          onClick={() => openModal(track)}
        >
          <h5 className="tracks">Track {track.id}: {track.title}</h5>
        </div>
      ))}

      {selectedTrack && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h2 className="modal-title">Track {selectedTrack.id}: {selectedTrack.title}</h2>
            <p className="modal-description">{selectedTrack.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tracks;


