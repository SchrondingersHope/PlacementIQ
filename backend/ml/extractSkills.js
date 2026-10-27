import { PDFParse } from "pdf-parse";
// import { skillzList } from "../public/essentials.js";
// const skillzList = ["c++", "java", "python"];

export async function getResumeText(resumePath){
    const parser = new PDFParse({url: resumePath});
    try{
        const result = await parser.getText();
        // to extract text from page 3 only:
        // const result = await parser.getText({ partial: [3] });
        return result.text;
    } catch(err){
        console.dir(err);
    } finally{
        await parser.destroy();
    }
}

export async function getSkillsFromResume(resumePath, skills){
    let resumeText = await getResumeText(resumePath);
    resumeText = resumeText.toLowerCase();
    // .toLowerCase();
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
    // console.log(ski);

    return ski;
    let re = "He is a complete pupu!".toLowerCase();
    console.log(re.includes("He"));
}