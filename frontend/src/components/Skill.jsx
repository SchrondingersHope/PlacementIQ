
import "./Skill.css"

export default function Skill({id, name, val, maxVal}){
    // document.sk.style.setProperty('--perce', `{(100*val)/maxVal}%`);

    const fillPerc = (100*val)/maxVal;
    const sfillstyle = {
        width:  `${fillPerc}%`,
        // make it rgb based gradient based on percentage later
        backgroundColor: fillPerc>=50 ? "rgb(127, 211, 0)" :"rgb(210,50,100)", 
    }
    return(
        <div className="sk" id={`s${id}`}>
            <div className="sname">{name}</div>
            <div className="progbar">
                <div className="sbar">
                    <div className="sfill" style={sfillstyle}>
                        <div className="sval" >{fillPerc}% </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}