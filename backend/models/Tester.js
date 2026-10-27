import mongoose from "mongoose";

const mcqSChema = new mongoose.Schema({
    ques: {type: String},
    // 2 or 4 options??
    ops: [{type: String}],
    correct: Number,
}, {timestamps: true});

const MCQ = mongoose.model("MCQ",mcqSChema);

export { MCQ };

