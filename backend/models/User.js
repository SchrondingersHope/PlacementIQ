import mongoose from "mongoose";

// field count = 10
const userSchema = new mongoose.Schema({
    dpPath: {
        type: String,
        default: "",
    },
    userName: {
        type: String,
        required: true,
        min: 4,
        max: 60,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 7,
    },
    resumePath: {
        type: String,
        default: "",
        required: true,
    },
    targetCompanyID: {
        type: String,
        default: "",
        ref: 'Company',
    },
    // favCompanies:  {
    //     type: Map,
    //     of: Boolean,
    // },
    favCompanies: [{
        type: String,
        ref: 'Company',
    }],
    //add user recs/matches, max of 5 most matched companies here.
    // favCom: {type: Array, default: []},
    skills: [{
        type: Number,
        required: true,
    }], // later when diff skill types/roles are added, this needs to be skill:val
    // targetPrepRoadMap: {String},
    targetPrepRoadMap: [{
        //status: tobedone/ongoing/done, ask by date
        task: {type: String, required: true},
        // later topic shall ref skill tree
        topic: {type: String, required: true},
        status: { 
            type: String, 
            enum: ['tobedone', 'ongoing', 'done', 'skipped'], 
            default: 'tobedone' 
        },
        //contains summary, links(explainers and practice) and reason for rec
        summ: {type: String},
        linkExp: {type: String},
        linkPra: {type: String},
        recReason: {type: String}, 
        //check your understanding
        tester: {
            ques: {type: String},
            // 2 or 4 options??
            ops: [{type: String}],
            correct: {type: Number},
        },
        todoDate: {type: Date},
        doneDate: {
            type: Date,
            // default: "01/01/2000",
        },
        // default: ""
    }],
    priority:[{
        type: Object,
        default:{"WLbalance":1,"Management":1,"Learning":1,}
    }]
}, {timestamps: true, minimize: false});

const User = mongoose.model("User", userSchema);

export default User;