import "./tracks.css";
import Description from "./description";

function Tracks() {
  return (
    <div className="tracks-container">
        <div className="title">Conference Scope</div>
      {Description.map((track) => (
        <div key={track.id} className="track-card">
          <h5 className="tracks">Track {track.id}: {track.title}</h5>
          <p className="track-description">{track.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Tracks;
