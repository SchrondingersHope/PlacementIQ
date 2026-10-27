import Review from "../models/Review.js";
import User from "../models/User.js";
import Company from "../models/Company.js";

// getAllReviews, getCompanyReviews, getInterviewReviews, updownvote, postNewReview
// [x] should I add update review and delete review? Maybe later. 
/* CREATE */
export async function postNewReview(req, res) {
    try{
        const { companyID, userID, interviewRev, rev } = req.body;
        const user = await User.findById(userID);
        const company = await Company.findById(companyID);
        const newRev = new Review({
            userID,
            userName: user.userName,
            userDP: user.dpPath,
            companyID,
            companyName:company.name,
            companyDP: company.dpPath,
            rev,
            upcount: {},
            interviewRev,
        });
        await newRev.save();
         
        const posts = await Review.find();

        res.status(201).json(posts);
    } catch(err){
        res.status(409).json({message: err.message});
    }
}


/* READ  */
export async function getAllReviews(req,res){
    try{
        const revs = await Review.find();
        res.status(201).json(revs);
    } catch(err){
        res.status(409).json({message: err.message});
    }
}

//both of the following refer to specific companies:
export async function getCompanyReviews(req,res){
    try{
        const { companyID } = req.params;
        const posts = await Review.find({companyID, interviewRev: false});
        // .$where('this.companyID === companyID');

        res.status(200).json(posts);

    } catch(err){
        res.status(409).json({message: err.message});
    }
}
export async function getInterviewReviews(req, res){
    try{
        const { companyID } = req.params;
        const posts = await Review.find({companyID, interviewRev: true});
        // .$where('this.companyID === companyID');

        res.status(200).json(posts);

    } catch(err){
        res.status(409).json({message: err.message});
    }
}

export async function upDownVote(req,res){
    try{
        // later also add the users who upvoted? needs schema change lol
        const { id } = req.params;
        const { userID} = req.body;
        const post = await Review.findById(id);
        const isUpvoted = post.upcount.get(userID);
        
        if(isUpvoted){
            post.upcount.delete(userID);
        } else {
            post.upcount.set(userID, true);
        }

        const updatedPost = await Review.findByIdAndUpdate(
            id,
            {upcount: post.upcount},
            {new: true}
        );

        res.status(200).json(updatedPost);
    } catch (err){
        res.status(404).json({ msg: err.message });
    }
}
