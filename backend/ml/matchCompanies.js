// import { getCompany } from "../controllers/companies"
// import { getUser } from "../controllers/users"
import User from "../models/User.js";
import Company from "../models/Company.js";

// no sep server rn, so best to directly connect to DB eh?
export function matchArrs(userArr, roleArr) {
    const skills = userArr;
    const req = roleArr;

    console.log(skills,req);
    let maxSkillVal = 1;
    // weighted dot prod or could be cosine similarity
    let results = [], sum=0,tot=0;
    skills.map((v,i)=>{
        console.log(i,v);
        results.push(skills[i]*req[i]);
        tot += req[i]*maxSkillVal;
        sum += (skills[i]*req[i]);
        console.log(skills[i], req[i], skills[i]*req[i],sum,tot, );
    })

    let matchVal = (sum*100)/tot;
    console.log("From inside: ", results, matchVal, tot);
    return { results, matchVal };
}

export async function matchSpecificCompany(userID, companyID, role){
    const skills = await User.findById(userID).skills;
    const req = await Company.findById(companyID).roles.$where(()=>{
        this.roleName === role
    }).req;

    let maxSkillVal = 10;
    // weighted dot prod or could be cosine similarity
    let results = [], sum=0,tot=0;
    skills.map((i,v)=>{
        results.push(skills[i]*req[i]);
        tot += req[i]*maxSkillVal;
        sum += skills[i]*req[i];
    })

    let match = (sum*100)/tot;
    return { results, match };
}

// export async function matchAllCompanies(userID,role){

// }