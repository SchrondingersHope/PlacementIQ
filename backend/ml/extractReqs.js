// import { skillzList } from "../public/essentials.js";

export function getReqsFromDesc(roleDesc, skills){
    // let resumeText = await getResumeText(resumePath);
    // console.log(roleDesc);
    const resumeText = roleDesc.toLowerCase();
    // naive implementation, only checks for existence of keywords

    
    let ski = [];

    // console.log(skills);
    skills.map((v,i)=>{
        // console.log(i,v);
        if(resumeText.includes(v)){          
            ski.push(1);
        } else {
            ski.push(0);
        }
    })
    console.log(ski);

    return ski;
    let re = "He is a complete pupu!".toLowerCase();
    console.log(re.includes("He"));
}