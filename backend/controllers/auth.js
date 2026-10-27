import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { getSkillsFromResume } from "../ml/extractSkills.js";
import { skillzList } from "../middleware/essentials.js";
import { addMatches } from "./match.js";

// const skillzList = ["c++", "java", "python"];
const saltRounds = 12;

function jwtSigning(user){
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    return token;
}

/* REGISTER USER */
export async function register(req, res){
    // Multer gives you the uploaded file's metadata through req.file or req.files
    try{
        const {
            // dpPath,
            userName,
            email,
            password,
            // resumePath,
            targetCompanyID,
            favCompanies,
            // skills,
            priority,
        } = req.body;

        // can do .filename, or .path or both
        const dpPath = req.files.picture?.[0]?.path;
        const resumePath = req.files.resume?.[0]?.path;
        // when ml moves to another dedicated server, prolly can't get skills here
        
        const skills = await getSkillsFromResume(resumePath, skillzList) || Array.from({length: skillzList.length},() => 0);
        // console.log(skills,"this is what skills be getting",await getSkillsFromResume(resumePath, skillzList));
        const salt = await bcrypt.genSalt(saltRounds);
        const passwordHash = await bcrypt.hash(password,salt);

        // id, skills, targetPrepRoadMap, priority
        // can use skills = extractSkillsFromResume();
        const newUser = new User({
            dpPath,
            userName,
            email,
            password: passwordHash,
            resumePath,
            targetCompanyID,
            favCompanies,
            skills,
            priority,
            // targetPrepRoadMap
        })

        const savedUser = await newUser.save();
        // delete password??
        delete savedUser.password;
        const token = jwtSigning(savedUser);
        res.status(201).json({token, savedUser});
        console.log("REGISTERED!!!");
        
        addMatches({"user":savedUser});
        console.log("Matches added!!");

    } catch(err){
        res.status(500).json({error: err.message});
        console.dir(err);
    }    
}

/* LOGIN USER */
export async function login(req,res) {
    try{
        console.log(req.body);
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if(!user) return res.status(400).json({msg: "User not found."});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: "Wrong user or password."});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        // deleting only in the var user, not the db lol
        delete user.password;
        console.log(token);
        res.status(200).json({token, user});


    } catch(err){
        res.status(500).json({error: err.message});
        console.dir(err);
    }
}