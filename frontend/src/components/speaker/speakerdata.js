// src/data/speakersData.js
import AmitAgarwal from '../assets/speakers/Dr Amit Agarwal.png';
import Rakesh from "../assets/speakers/Prof Dr Rakesh K Dwivedi2.png"
import Amitkumar from "../assets/speakers/Dr Amit Kumar Bansal.png"


const speakerData = [
  {
    name: 'Dr. Amit Agarwal',
    image: AmitAgarwal,
    title: <p><div>CONFERENCE CO-CHAIR<br></br>Director<br></br>ITG Gopeshwar</div></p>,
  },

  {
    name: 'Prof.(Dr.) Rakesh K Dwivedi',
    image : Rakesh,
    title: <p><div>CONFERENCE CO-CHAIR<br></br>Director<br></br>TMU Moradabad</div></p>,
  },
  {
      name: 'Dr. Amit Kumar Bansal',
      image: Amitkumar,
      title: <p><div>CONFERENCE CO-CHAIR<br></br>Director<br>
      </br>KSVCEM, Bijnor
          </div></p>,
    },
];

export default speakerData;

