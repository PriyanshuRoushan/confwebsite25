// src/data/speakersData.js
import AmitAgarwal from '../assets/speakers/Dr Amit Agarwal.png';
import Rakesh from "../assets/speakers/Prof Dr Rakesh K Dwivedi.png"
import Amitkumar from "../assets/speakers/Dr Amit Kumar Bansal.png"


const speakerData = [
  {
    name: 'Dr. Amit Agarwal',
    image: AmitAgarwal,
    title: <p><div>Director<br></br>ITG Gopeshwar</div></p>,
    topic: 'Computational Engineering'
  },

  {
    name: 'Prof (Dr) Rakesh K Dwivedi',
    image: Rakesh,
    title: <p><div>Director<br></br>TMU Moradabad</div></p>,
    topic: 'Astrodynamics'
  },
  {
      name: 'Dr Amit Kumar Bansal',
      image: Amitkumar,
      title: <p><div>Director<br>
      </br>KSVCEM, Bijnor
          </div></p>,
      topic: 'Astrodynamics'
    },
];

export default speakerData;

