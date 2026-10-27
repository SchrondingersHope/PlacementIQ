import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    companyID: {
        type: String,
        required: true,
        ref: 'Company',
    },
    companyName: {
        type: String,
        required: true,
        ref: 'Company',
    },
    companyDP:String,
    userID:{
        type: String,
        required: true,
        ref: 'User',
    },
    userName:{
        type: String,
        required: true,
        min: 4,
        max: 60,
        ref: 'User',
    },
    userDP: {
        type: String,
        ref: 'User',
    },
    rev:{
        type: String,
        required: true,
        min: 2,
        max: 500,
    },
    interviewRev: {
        type: Boolean,
    },
    upcount: {
        // needs to change
        // type: Number,
        type: Map,
        of: Boolean,
    },
}, {timestamps: true, minimize: false});

const Review = mongoose.model("Review",reviewSchema);
export default Review;