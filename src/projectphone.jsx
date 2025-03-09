import calc from"./assets/calc.jpeg";
import password from"./assets/pass.jpg";
import stop from"./assets/stop.webp";
import daimond from"./assets/daimond.webp";
import number from"./assets/number.webp";



function Phone(){
    return(
        <>
       
        <div className="phoneOUT">
            <div className="phonein">
                <div>
                <img className="phoneimg" src={calc} alt="Calculator Image" />
                </div>
                <div className="phonetxt">
                    <h1 className="phoneh1"> Currency Converter</h1>
                    
                    <p className="phonep">Real-time currency conversion with live rates.</p>
   
                </div>

                <br />
                <div className="visitbtn"><a className="avisit" href="https://currencyconvertoer.netlify.app" target="_blank" rel="noopener noreferrer">
                <span className="visit">visit</span></a></div>
                </div><br />
            <div className="rndbtn"></div>
        </div>

        <div className="phoneOUT">
            <div className="phonein">
                <div>
                <img className="phoneimg" src={password} alt="Password Generator" />
                </div>
                <div className="phonetxt">
                    <h1 className="phoneh1"> Password Generator</h1>
                    
                    <p className="phonep">Generate secure passwords instantly with custom options.</p>
   
                </div>

                <br />
                <div className="visitbtn"><a className="avisit" href="https://newpasswordgenerator.netlify.app" target="_blank" rel="noopener noreferrer"><span className="visit">visit</span></a></div>
                </div><br />
            <div className="rndbtn"></div>
        </div>


        <div className="phoneOUT">
            <div className="phonein">
                <div>
                <img className="phoneimg" src={stop} alt="Stop Watch" />
                </div>
                <div className="phonetxt">
                    <h1 className="phoneh1"> Stop Watch</h1>
                    
                    <p className="phonep">Track time effortlessly with start, stop, and reset functions.</p>
   
                </div>

                <br />
                <div className="visitbtn"><a className="avisit" href="https://neonstopwatch.netlify.app" target="_blank" rel="noopener noreferrer"><span className="visit">visit</span></a></div>
                </div><br />
            <div className="rndbtn"></div>
        </div>



        
        <div className="phoneOUT">
            <div className="phonein">
                <div>
                <img className="phoneimg" src={daimond} alt=" Daimond PriceXpert" />
                </div>
                <div className="phonetxt">
                    <h1 className="phoneh1"> Daimond PriceXpert</h1>
                    
                    <p className="phonep">Accurately estimate diamond prices with ease.</p>
   
                </div>

                <br />
                <div className="visitbtn"><a className="avisit" href="https://pricexpert.netlify.app" target="_blank" rel="noopener noreferrer"><span className="visit">visit</span></a></div>
                </div><br />
            <div className="rndbtn"></div>
        </div>


        <div className="phoneOUT">
            <div className="phonein">
                <div>
                <img className="phoneimg" src={number} alt=" Number Guessing Game" />
                </div>
                <div className="phonetxt">
                    <h1 className="phoneh1">  Number Guessing Game</h1>
                    
                    <p className="phonep">"Guess the number and test your luck!"</p>
   
                </div>

                <br />
                <div className="visitbtn"><a className="avisit" href="https://numbergameguessgame.netlify.app" target="_blank" rel="noopener noreferrer"><span className="visit">visit</span></a></div>
                </div><br />
            <div className="rndbtn"></div>
        </div>
        </>
    );
}

export default Phone