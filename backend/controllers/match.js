
import UCMatch from "../models/UCMatch.js";
import Company from "../models/Company.js";
import User from "../models/User.js";
import { matchArrs } from "../ml/matchCompanies.js";

// [y] create, 
// []  update for a user against all companies, bulk apply to db.
// [y] get top 5/10 sorted by match for rec, 
// []  get vals per user/company: same logic each time a company is called

const recNum = 4;

export async function addMatches({userID,user}) {
    try{
        const companies = await Company.find();
        let id = userID || user._id;
        if(!user){
            const user = await User.findById(id);
        } else {
            if(!id){
                const id = user._id;
            }
        }
        // studentID, companyID, role, matchArr, matchScore, interestScore, coreIntpt,

        const updates = [];
        // const mea = [{"r":"name1", "val":[2,5,6]},{"r":"name2", "val":[2,5,6]}];
        companies.forEach((v)=>{
            v.roles.map((val,i)=>{
                const role =val.roleName;
                const { results, matchVal } = matchArrs(user.skills,val.req);
                console.log(user.skills, val.req, results,matchVal);
                let obj = {
                    "studentID" : id, 
                    "companyID": v._id, 
                    "role": role, 
                    "matchArr": results, 
                    "matchScore": matchVal, 
                    "interestScore": Math.random()*100,
                    "coreIntpt": "Smth",
                }
                updates.push(obj);
            })
        })

        // bulk write/updates
        // await UCMatch.create(updates);
        const matches = await UCMatch.insertMany(updates, {ordered: false});
        return matches;
    }catch(err){
        res.status(404).json({"msg": err.message});
    }   
}

export async function addCompanyMatches({companyID, company}) {
    try{
        // need to update for companies []
        const users = await User.find();
        let id = companyID || company._id;
        if(!company){
            const company = await Company.findById(id);
        } else {
            if(!id){
                const id = company._id;
            }
        }
        // studentID, companyID, role, matchArr, matchScore, interestScore, coreIntpt,

        const updates = [];
        company.roles.map((val,i)=>{
            const role =val.roleName;
            users.forEach( user => {
                const { results, matchVal } = matchArrs(user.skills,val.req);
                console.log(user.skills, val.req, results,matchVal);
                let obj = {
                    "studentID" : user._id, 
                    "companyID": id, 
                    "role": role, 
                    "matchArr": results, 
                    "matchScore": matchVal, 
                    "interestScore": Math.random()*100,
                    "coreIntpt": "Smth",
                }
                updates.push(obj);
            })
        })

        // bulk write/updates
        // await UCMatch.create(updates);
        const matches = await UCMatch.insertMany(updates, {ordered: false});
        return matches;
    }catch(err){
        console.dir(err);
        return;
        // res.status(404).json({"msg": err.message});
    }   
}

export async function getRecs(req, res){
    try{
        const { id }= req.params;
        // const recs = await UCMatch.find({studentID: id}).sort({matchScore: -1}).limit(recNum);

        const recs = await UCMatch.aggregate([
            {
                $match: {studentID: id}
            },
            {
                $sort: {matchScore: -1}
            }, {$limit: recNum},
            {  
                $set: {
                    companyId: { $toObjectId: "$companyID" }
                }
            },
            {   $lookup:{
                    from: "companies",
                    localField: "companyId",
                    foreignField:  "_id",
                    as: "company"
                }
            }
        
        ])

        console.log(recs);
        
        res.status(200).json(recs);
    }catch(err){
        res.status(404).json({"msg": err.message});
    }
}