import Facultiesdata from "./facultiesdata";
import "./faculties.css";

const Faculties = () => {
  // Group faculties by role
  const groupedByRole = Facultiesdata.reduce((acc, faculty) => {
    if (!acc[faculty.role]) {
      acc[faculty.role] = [];
    }
    acc[faculty.role].push(faculty);
    return acc;
  }, {});

  return (
    <div className="product-carousel" >
      <section className="faculties-section" id="committee">
        <h2 className="faculties-heading">Organizing Committee</h2>
        <br />
        {Object.entries(groupedByRole).map(([role, members], idx) => (
          <div key={idx} className="faculties-group">
            <h3 className="faculties-role-heading">{role}</h3>
            <div className="faculties-row">
              {members.map((faculty, index) => (
                <div className="faculties-card" key={index}>
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="faculties-image"
                  />
                  <h3 className="faculties-name">{faculty.name}</h3>
                  <div className="faculties-position">{faculty.title}</div>
                </div>
              ))}
            </div>
            <div className="animated-line" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faculties;
