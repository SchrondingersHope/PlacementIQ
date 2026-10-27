// User Company Match
import mongoose from "mongoose";
import User from "./User.js";
import Company from "./Company.js";

const UCMatchSchema = new mongoose.Schema({
    studentID: {
        type: String,
        // unique: true,
        required: true,
        ref: "User",
    },
    companyID: {
        type: String,
        // unique: true,
        required: true,
        ref: "Company",
    },
    role: {
        type: String,
        default: "SDE",
        required: true,
    },
    matchArr: [{
        type:Number,
    }],
    matchScore: Number,
    interestScore: Number,
    coreIntpt: String,
}, {timestamps: true, minimize: false});

UCMatchSchema.index(
    {studentID:1, companyID:1,role:1},
    {unique: true}
);

const UCMatch = mongoose.model("UCMatch", UCMatchSchema);
export default UCMatch;