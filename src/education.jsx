import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";



function Education(){
    return(
        <>
        <div className="border"></div>
        <div className='education'><span className='educ'>Education</span></div>
        <div className="educationsection">
            <div className="eleft">
            <DotLottieReact       src="https://lottie.host/60252613-34a0-4500-bceb-453a06ecdb82/iqg74fc78a.lottie"   
               loop  
            autoplay
            style={{ width: "400px", height: "400px" }}     />
            </div>
            

            <div className='eright'>
             <div className='ebox'>
             <span className='eyear'> 2025 - PRESENT</span>
             <FontAwesomeIcon className='eiconBox' icon={faLaptop} size="3x" style={{ color: "purple" }} />
             </div>
            < div className='efix'>
          <span className='eth1'>Atharva college of Engineering</span><br />
          <span className='epbox'>Bachelor of Engineering</span>
        </div>
        <div className='ebox'>
             <span className='eyear'>2022 - 2024</span>
             <FontAwesomeIcon className='eiconBox' icon={faLaptop} size="3x" style={{ color: "purple" }} />
             </div>
            < div className='efix'>
          <span className='eth1'>S.V.P. Juinor college</span><br />
          <span className='epbox'>Higher Secondary Education</span>
        </div>

        <div className='ebox'>
             <span className='eyear'>2008 - 2022</span>
             <FontAwesomeIcon className='eiconBox' icon={faLaptop} size="3x" style={{ color: "purple" }} />
             </div>
            < div className='efix'>
          <span className='eth1'>S.T. Xavier's High School</span><br />
          <span className='epbox'>Secondary Education</span>
        </div>
        </div>
        </div>
        </>
    );
}



export default Education