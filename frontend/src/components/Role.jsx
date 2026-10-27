
import "./Skill.css"

let skillVals = [9,5,1];
let maxVal = 10;

export default function Role({role, skillzList}){
    // document.sk.style.setProperty('--perce', `{(100*val)/maxVal}%`);
    const skillPerc = skillVals.map((v,i)=>{
        return (v*100)/maxVal;
    })
    
    const reqPerc = role.req.map((v,i)=>{
        return (v*100)/maxVal;
    })
    console.log(skillPerc, reqPerc);
    
    return(
        <div className="sk">
            <div className="rname">{role.roleName}</div>
            <div className="rdesc">{role.roleDesc}</div>


            {role.req.map((v,i)=>(
                <div className="skb" key={i}>
                    <div className="sname">{skillzList[i]}</div>
                    <div className="progbar">
                        <div className="sbar">
                            <div className="sfill" style={skillVals[i]>v ? {width: `${skillPerc[i]}%`,backgroundColor: "rgb(127, 211, 0)"}: {width: `${reqPerc[i]}%`,backgroundColor: "rgb(241, 41, 255)"}}></div>
                            <div className="sfill" style={skillVals[i]>v? {width: `${reqPerc[i]}%`,backgroundColor: "rgb(241, 41, 255)",}:{width: `${skillPerc[i]}%`,backgroundColor: "rgb(127, 211, 0)"}}></div>
                        </div>
                    </div>
                </div>
            ))}

            
        </div>
    );
}