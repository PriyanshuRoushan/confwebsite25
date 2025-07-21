import speakerData from './speakerdata';
import './speaker.css'; // Reusing the same CSS for design consistency

const Speakers = () => {

  return (
    <div className="product-carousel">
      <section className="speaker-section" id="speakers">
        <h2 className="speaker-heading">Our Speakers</h2><br />

      
          <div className="speaker-grid">
            {speakerData.map((speaker, index) => (
              <div className="speaker-card" key={index}>
                <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-position">{speaker.title}</p>
              </div>
            ))}
          </div>
        

        <div className="animated-line" />
      </section>
    </div>
  );
};

export default Speakers;
