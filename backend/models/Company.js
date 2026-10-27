import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    dpPath: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        required: true,
        unique: true,
        min: 2,
        max: 70,
    },
    overview: {
        type: String, 
        required: true,
    },
    roles: [{
        roleName: {type: String},
        roleDesc: {type: String, default:""},
        // req to be changed later to contain key: value
        req: [Number],
    }],

    // total Favouritees
    totFavees: {
        type: Number,
        default: 0,
    },

    // total Targetees
    totTarees: {
        type: Number,
        default: 0,
    },
    // optional top reviews in each category.
}, {timestamps: true, minimize: false});

const Company = mongoose.model("Company",companySchema);
export default Company;