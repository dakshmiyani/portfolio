import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import cplus from "./assets/cplus.png";
import c from "./assets/c.png";
import figma from "./assets/figma.png";
import react from"./assets/react.png";

function Skills() {
  return (
    <>
      <div className="skilldiv">Skills</div>
      <div className="skillsection">
        <div className="scrolling-wrapper">
          <div className="skillbox">
            <img className="skillimg" src={html} alt="HTML" />
            <br />
               <h3 className="skillh3">HTML</h3>
          </div>
          
          <div className="skillbox">
            <img className="skillimg" src={css} alt="HTML" />
            <br />
               <h3 className="skillh3">CSS</h3>

          </div>
          <div className="skillbox">
            <img className="skillimg" src={js} alt="HTML" />
            <br />
               <h3 className="skillh3">Java Script</h3>
          </div>

       
          <div className="skillbox">
            <img className="skillimg" src={cplus} alt="HTML" />
            <br />
               <h3 className="skillh3">C++</h3>
          </div>

          <div className="skillbox">
            <img className="skillimg" src={c} alt="HTML" />
            <br />
               <h3 className="skillh3">C</h3>
          </div>

          <div className="skillbox">
            <img className="skillimg" src={figma} alt="HTML" />
            <br />
               <h3 className="skillh3">Figma</h3>
          </div>
          
          <div className="skillbox">
            <img className="skillimg" src={react} alt="HTML" />
            <br />
               <h3 className="skillh3">React</h3>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Skills;
