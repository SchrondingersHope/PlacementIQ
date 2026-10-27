import User from '../models/User.js';
import Company from '../models/Company.js';
import UCMatch from '../models/UCMatch.js';
// update user skills/targetpreproadmap/dp/resume etc

/* READ */
export async function getUser(req,res){
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err){
        res.status(404).json({ msg: err.message });
    }
}

export async function getUserTarget(req, res){
    try{
        const { id } = req.params;
        const user = await User.findById(id);

        const target = await Company.findById(user.targetCompanyID);
        const targMatches = await UCMatch.find({studentID: id, companyID: target._id}).sort({matchScore: -1}).limit(-1);
        
        // target[matches] = matches;
        const resu = {target, targMatches};
        res.status(200).json(resu);
    } catch(err){
        res.status(404).json({msg: err.message});
    }
        
}

export async function getUserFavs(req, res){
    try{
        const { id } = req.params;
        const user = await User.findById(id);

        const favs = await Promise.all(
            user.favCompanies.map((id) => Company.findById(id))
        );
        const formattedFavs = favs.map(
            ({ _id, name, dpPath}) =>{
                return { _id, name, dpPath};
            }
        );
        res.status(200).json(formattedFavs);
    } catch(err){
        res.status(404).json({msg: err.message});
    }
        
}

// export async function getUserRecs(params) {
    // put this into sep file
// }

/* UPDATE */
// [] user skills/targetpreproadmap
export async function updateSkills(req, res) {
    const {id} = req.params;
    const { skills} = req.body;
    
    const user = await User.findById(id);
    user.skills = skills;
    await user.save();
    res.status(200).json(user);
}

// [] dp/resume
export async function updateTarget(req,res){
    const { id, targetCompanyID } = req.params;
    // const user = await User.findByIdAndUpdate(id, {targetCompanyID: targetCompanyID},{returnDocument:'after'});
    const targ = await Company.findById(targetCompanyID);
    // if()

    // same as above
    const user = await User.findById(id);
    user.targetCompanyID = targetCompanyID;
    await user.save(); 

    res.status(200).json(user);
}

export async function addRemoveFav(req,res) {
    try{
        const { id,favyID } = req.params;
        const user = await User.findById(id);
        const fav = await Company.findById(favyID);

        if(user.favCompanies.includes(favyID)){
            user.favCompanies = user.favCompanies.filter((id)=> id !== favyID);
            fav.totFavees -= 1;
        } else {
            user.favCompanies.push(favyID);
            fav.totFavees += 1;
        }
        await user.save(); await fav.save();

        const favs = await Promise.all(
            user.favCompanies.map((id) => Company.findById(id))
        );
        const formattedFavs = favs.map(
            ({ _id, name, dpPath}) =>{
                return { _id, name, dpPath};
            }
        );

        res.status(200).json(formattedFavs);
    } catch(err){
        res.status(404).json({msg: err.message});
    }
}





