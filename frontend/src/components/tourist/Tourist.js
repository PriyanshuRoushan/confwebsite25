import React from 'react';
import './Tourist.css';

import haridwar from './images/haridwar.jpg';
import rishikesh from './images/rishikesh.jpg';
import rajaji from './images/rajaji.jpg';
import solani from './images/solani.jpg';
import dehradun from './images/dehradun.jpg';
import mussorie from './images/mussorie.jpg';
import iitroorkee from './images/iitroorkee.jpg';
import dhanaulti from './images/dhanaulti.jpg';

function Tourist() {
  return (
    <section className="tourist-section" id="tourist">
      <h2>Nearby Tourist Attractions</h2>
      <div className="tourist-list">

        <div className="tourist-card">
          <img src={haridwar} alt="Haridwar" />
          <h3>Har Ki Pauri, Haridwar</h3>
          <p>A sacred ghat on the Ganges River, 30 km from RIT. Known for evening Ganga Aarti.</p>
          <a href="https://goo.gl/maps/F3G3eAYJmCP2" target="_blank" rel="noreferrer">View on Map</a>
        </div>

        <div className="tourist-card">
          <img src={rishikesh} alt="Rishikesh" />
          <h3>Rishikesh</h3>
          <p>Yoga capital of the world, known for its spirituality and adventure sports. ~50 km away.</p>
          <a href="https://goo.gl/maps/EFSGcWUKubU2" target="_blank" rel="noreferrer">View on Map</a>
        </div>

        <div className="tourist-card">
          <img src={rajaji} alt="Rajaji National Park" />
          <h3>Rajaji National Park</h3>
          <p>Wildlife reserve ideal for safaris, located 40 km from campus.</p>
          <a href="https://goo.gl/maps/RpAGFGC1VZ12" target="_blank" rel="noreferrer">View on Map</a>
        </div>

        <div className="tourist-card">
          <img src={solani} alt="Solani Aqueduct" />
          <h3>Solani Aqueduct</h3>
          <p>Historical marvel and engineering beauty just a few km from RIT Roorkee.</p>
          <a href="https://goo.gl/maps/VqFe8Mm4hKK2" target="_blank" rel="noreferrer">View on Map</a>
        </div>

        <div className="tourist-card">
          <img src={dehradun} alt="Dehradun" />
          <h3>Dehradun</h3>
          <p>Capital city of Uttarakhand known for scenic beauty and educational institutions.</p>
          <a href="https://goo.gl/maps/xr9hKjFtvE82" target="_blank" rel="noreferrer">View on Map</a>
        </div>

        <div className="tourist-card">
          <img src={mussorie} alt="Mussorie" />
          <h3>Mussorie</h3>
          <p>Famous hill station called "Queen of Hills" just a few hours from Roorkee.</p>
          <a href="https://goo.gl/maps/TDU9a1PWoKj" target="_blank" rel="noreferrer">View on Map</a>
        </div>

        <div className="tourist-card">
          <img src={dhanaulti} alt="Dhanaulti" />
          <h3>Dhanaulti</h3>
          <p>A peaceful hill station surrounded by forests, just 70 km from RIT.</p>
          <a href="https://goo.gl/maps/qy5K48ixPdTP2P7q6" target="_blank" rel="noreferrer">View on Map</a>
        </div>

        <div className="tourist-card">
          <img src={iitroorkee} alt="IIT Roorkee" />
          <h3>IIT Roorkee</h3>
          <p>One of India's most prestigious engineering institutions with a beautiful historic campus.</p>
          <a href="https://goo.gl/maps/kRjWxHfrnoK2" target="_blank" rel="noreferrer">View on Map</a>
        </div>

      </div>
    </section>
  );
}

export default Tourist;
