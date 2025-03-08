import dakshimg from './assets/dakshimg.jpeg';
function AboutMe(){
    return(
   
      <>
     
      <div className='about'> <span className='sabot'>About ME</span></div>
      
        <div className="secondsection">
            {/* left side */}
            < div className="sleftside">
        <h1 className="sh1">WHO I AM?</h1><br />
        
        <p className="sptag">My name is Daksh Miyani, and I am a passionate student with a strong self-learning attitude, always eager to explore new technologies and solve real-world problems. My core skills include HTML, CSS, JavaScript, C, C++, and Figma, with a keen interest in web development, UI/UX design, and programming. I enjoy building user-friendly applications and continuously improving my technical expertise. As a dedicated learner, I am open to collaborations, internships, and opportunities that align with my skills and interests, striving to make technology more accessible and impactful. </p>
 </div>
        
     
         {/* rightside */}
       
        <div className="srightside">
            <img className="simg"src={dakshimg}alt="" />
        </div>
        </div>
        </>
    );
}
export default AboutMe