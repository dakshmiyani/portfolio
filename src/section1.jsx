

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function HeroSection(){
    return(
        <section id="heroctn">
     <div className="heroctn">
        <div className="leftfirst">
            <h1 className="lefth1">
                Hello,<br />
                This is <span className="leftName">Daksh Miyani</span>,<br />I'm a  
                <span className="leftstudent"> Student</span>.
                
            </h1>
            <div className="icons">


{/* link GB */}
            <a
          href="https://github.com/dakshmiyani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="iconq"
            icon={faGithub}
            size="2x"
            style={{ color: "#FF66B2", cursor: "pointer", marginLeft:"0px" }}
          />
        </a>
{/* link LNKDN */}
<a
          href="https://www.linkedin.com/in/daksh-miyani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="iconq"
            icon={faLinkedin}
            size="2x"
            style={{ color: "#FF66B2", cursor: "pointer", marginLeft:"30px" }} />
  </a>

{/* link insta */}


<a
          href="https://www.instagram.com/daksh_miyani61/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="iconq"
            icon={ faInstagram}
            size="2x"
            style={{ color: "#FF66B2", cursor: "pointer", marginLeft:"30px"}} />

            </a>
         
            </div>
                     <div className="cbutn">
                <button className="leftcontactme">Contact Me</button>
                </div>
                
      </div>
      {/* left side over */}


      {/* right side start */}

      <div className="rightfirst">
        <div className="dots">
            <div className="dotsh">
                <div className="oneball"></div>
                <div className="twoball"></div>
                <div className="threeball"></div>
            </div>
            <div className="bio">
                <p><pre>
                    <span className="biopink">const</span> coder <span className="biopink">=</span> <span className="biogrey">&#123;</span><br />
                      <span>    name:</span><span className="biogrey">'</span><span className="bioyellow">Daksh Miyani</span><span className="biogrey">',</span><br />
                      <span>    age:</span><span className="biogreen"> 19</span><span className="biogrey">,</span><br />
                      <span>    skills:</span><span className="biogrey">&#91;</span><span className="biogrey">'</span><span className="bioyellow">Java Script</span><span className="biogrey">',</span><span className="biogrey">'</span><span className="bioyellow">HTML</span><span className="biogrey">',</span><span className="biogrey">'</span><span className="bioyellow">CSS</span><span className="biogrey">',</span><span className="biogrey">'</span><span className="bioyellow">C++</span><span className="biogrey">',</span><br />
                      <span className="biogrey">            '</span><span className="bioyellow">React</span><span className="biogrey">',</span><span className="biogrey">'</span><span className="bioyellow">Figma</span><span className="biogrey">',</span><span className="biogrey">&#93;,</span><br />
                      <span>    hardWorker:</span><span className="bioorange"> true</span><span className="biogrey">,</span><br />
                      <span>    quickLearner:</span><span className="bioorange"> true</span><span className="biogrey">,</span><br />
                      <span>    problemSolver:</span><span className="bioorange"> true</span><span className="biogrey">,</span><br />
                      <span className="biogreen">    readyForOpportunities:</span><span className="bioorange">function</span><span className="biogrey">() &#123;</span><br />
                     
                    <span className="bioorange">         return</span><span className="biogrey">(</span><br />
                    <span className="bioblue">           this.</span>hardWorker <span className="bioyellow">&&</span><br />
                    <span className="bioblue">           this.</span>problemSolver <span className="bioyellow">&&</span><br />
                    <span className="bioblue">           this.</span>skills.length <span className="bioyellow">&gt;=</span><span className="bioorange"> 5</span><br />
                    <span className="biogrey">          );</span><br />
                    <span className="biogrey">           &#125;,</span><br />
                    <span className="biogrey">           &#125;;</span><br />
                    </pre></p>
            

            </div>
            </div>
      </div>
     </div>
    </section>
    );
}
export default HeroSection;
