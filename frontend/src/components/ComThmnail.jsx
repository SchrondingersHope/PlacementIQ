import './CompanyThumbnail.css';
import iconDia from "../assets/diamond-solid-full.svg";
import iconHea from "../assets/heart-solid-full.svg";

// to-dos: 
// [] add separate colors to icons based on targ and fav val
// [] color of matchVal green if exceeds th1 or red if below th2 

export default function ComThmnail({imgSrc, name, matchScore, coreIntPt, targ,fav}){
    return(
        <div className="cth">
            <div className='ctheader'>
                <div className="cinfo">
                    <img className="cimg" src={imgSrc} width="50"></img>
                    <div className="cname">{name}</div>
                </div>
                <div className="uchoice">
                    <img className={targ? "cimg targ": "cimg unsel"} src={iconDia} width="50"></img>
                    <img className={fav? "cimg fav": "cimg unsel"} src={iconHea} width="50"></img>
                </div>
                {/* T:{targ} */}
                
                {/* <FontAwesomeIcon icon={byPrefixAndName.fas['heart']} style={{color: "rgb(164, 178, 188)",}} /> */}
            </div>

            <div className="cthmatch">
                Skill Match: {matchScore}
            </div>

            <div className="cthintpt">
                {coreIntPt}
            </div>
        </div>
    );
}