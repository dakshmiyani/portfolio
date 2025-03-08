import laptop from './assets/laftop.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

function Experience(){


    return(
        <>
        <div className='experience'>Experience</div>
        <div className='thirdsection'>
            <div className='tleft'>
                <img src={laptop} alt="laptop" />
            </div>

            <div className='tright'></div>
            <div className="container">
  <div className='box'>
    <div className="content">
      <span className='year'>(JAN 2025 - PRESENT)</span>
      <div className="info">
        <FontAwesomeIcon className='iconBox' icon={faLaptop} size="3x" style={{ color: "purple" }} />
        <div className='fix'>
          <span className='th1'>Student</span><br />
          <span className='pbox'>Passionate about learning.</span>
        </div>
      </div>
    </div>
  </div>

  <div className='box'>
    <div className="content">
      <span className='yearf'>(JAN 2025 - PRESENT)</span>
      <div className="info">
        <FontAwesomeIcon className='iconBox' icon={faLaptop} size="3x" style={{ color: "purple" }} />
        <div className='fix'>
          <span className='th1'>Self-Learner</span><br />
          <span className='pbox'>Code and build something everyday  .</span>
        </div>
      </div>
    </div>
  </div>

  <div className='box'>
    <div className="content">
      <span className='year'>(JAN 2025 - PRESENT)</span>
      <div className="info">
        <FontAwesomeIcon className='iconBox' icon={faLaptop} size="3x" style={{ color: "purple" }} />
        <div className='fix'>
          <span className='th1'>Tech Enthusiast</span><br />
          <span className='pbox'>Loves exploring new tech</span>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
        </>
    );
}

export default Experience