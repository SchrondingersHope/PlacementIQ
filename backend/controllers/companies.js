import { getReqsFromDesc } from "../ml/extractReqs.js";
import Company from "../models/Company.js";
import { skillzList } from "../middleware/essentials.js";
import UCMatch from "../models/UCMatch.js";
import { addCompanyMatches } from "./match.js";

// update companies: a form just like create with prefilled existing vals.
// [y] add roles
/* CREATE */
export async function addCompany(req, res) {
    try{        
        const {
            // dpPath,
            name,
            overview,
            // roles,
        } = req.body;

        // can do .filename, or .path or both
        const roles = JSON.parse(req.body.roles);
        console.log(roles, roles.roleDesc);

        const dpPath = req.file.path;
        roles["req"] = getReqsFromDesc(roles.roleDesc, skillzList) || Array.from({length: skillzList.length},() => 0);
        // .picture?.[0]?.path;
        // const resumePath = req.files.resume?.[0]?.path;
        console.log(roles[req], roles);

        // roles[req] = await getReqsFromDesc(roles)
        const newCompany = new Company({
            dpPath,
            name,
            overview,
            roles
        })

        const savedUser = await newCompany.save();
        res.status(201).json(savedUser);
        console.log("COMPANY ADDED!");

        addCompanyMatches({company: savedUser});
        console.log("Matches added!!");
    } catch(err){
        res.status(500).json({error: err.message});
        console.dir(err);
    }    
}

/* UPDATE */
export async function addRole(req,res) {
    try{
        // [ ] add match values for newly added/updated roles
        const {companyID} = req.params;
        const { roleName, roleDesc } = req.body;

        const comp = await Company.findById(companyID);

        const r = comp.roles;
        
        const reqq = getReqsFromDesc(roleDesc, skillzList) || Array.from({length: skillzList.length},() => 0);
       

        let marked = false;
        r.map((role, i)=>{
            if(role.roleName === roleName){
                role.roleDesc = roleDesc;
                role.req = reqq;
                marked = true;
            }
        })
        if(!marked){
            r.push({roleName, roleDesc, reqq});
        }
        
        console.log(r);
        comp.roles = r;
        await comp.save();
        return res.status(200).json(comp);
        
    }catch(err){
        res.status(404).json({ msg: err.message });
    }
}

/* READ */
export async function getCompany(req,res){
    try{

        const { id, userID } = req.params;

        let company = await Company.findById(id).lean();
        // await addCompanyMatches({company});
        const matches = await UCMatch.find({studentID: userID, companyID: id}).sort({matchScore: -1});
        console.log(matches[0].matchScore);
        // company.p ="q";
        console.log(matches);
        company["matchScore"] = matches[0].matchScore;
        
        company["coreIntpt"] = matches[0].coreIntpt;

        company.roles.map((v,i)=>{
            matches.forEach((val)=>{
                if(val.role == v.roleName){
                    v["matcheScore"] = val.matchScore,
                    v["matchArr"] = val.matchArr
                }
            })
        })

        // const resu = {company,matches};
        res.status(200).json(company);
    } catch (err){
        res.status(404).json({ msg: err.message });
    }
}

export async function getAllCompanies(req,res){
    try{
        // also allow filters and sorting
        const {pageSize, pageNum, userID} = req.params;
        // pages numbered from 0
        const companies = await Company.find();
        res.status(200).json(companies);

    } catch(err){
        res.status(404).json({ msg: err.message });
    }
}

