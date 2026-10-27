import Skill from "./Skill.jsx";
import "./SkillsBar.css"
// props = {skillzList, skillVals, maxVal};

export default function SkillsBar({skillzList, skillVals, maxVal}){
    
    return(
        <div className="skb">
            <div className="header">
                SKILLS
            </div>
            <div className="skshow">
                {skillVals.map((v, i)=>(
                    <Skill name={skillzList[i]} key={i} id={i} val={v} maxVal={maxVal}/>

                ))}
            </div>           
        </div>
    );
}