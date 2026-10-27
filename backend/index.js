import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path/posix';
import { upload, uploadCompany } from './configs/mult.js';

import * as dbConfigs from './configs/db.js';
import {register} from './controllers/auth.js';
import { verifyToken } from './middleware/authriz.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import companyRoutes from './routes/companyRoutes.js'
import dns from 'dns';
import { addCompany } from './controllers/companies.js';

//my project/laptop's got dns resolution issues lol
dns.setServers(['8.8.8.8', '1.1.1.1']);   

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
const port = process.env.PORT || 3123;

app.use(express.json());
app.use(express.urlencoded({limit: "5mb",extended: true}));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json({limit: "5mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "5mb",extended: true}));
// for prod, restrict access to intended frontend origins only, not any cross-origin
app.use(cors({
    origin: "http://localhost:5173"
}));
//saving locally
app.use("/assets", express.static(path.join(__dirname, 'public/assets'))); 


// /* FILE STORAGE */
// const storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         if(file.fieldname === "resume"){
//             cb(null, "public/assets/pdfs");
//         } else {
//             cb(null, "public/assets/images");
//         }   
//     },
//     filename: (req,file,cb) => {
//         cb(null,Date.now()+"-"+file.originalname);
//     }
// });

// const upload = multer({storage, fileFilter});
// const uploadFields = multer().fields([
//     {name: 'picture', maxCount: 1},
//     {name: 'resume', maxCount:7},
// ]);

/* ROUTES WITH FILES */
app.post("/auth/register", upload, register);
app.post("/company/register", uploadCompany, addCompany);
// app.post("/auth/login", login);
//use verifyToken before register for any further uploads
// app.post("/reviews", verifyToken, upload.single("pictue"), createPost);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/company", companyRoutes);
app.use("/reviews", reviewRoutes);

/* DB CONNECTION */
await dbConfigs.connectToDB();

// app.listen(port, (req,res)=>{
//     console.log(`App live on port ${port}`);
// })

app.get("/",(req,res)=>{
    // res.status(200).send('who is hanging??');
    // can send html text through .send and file through , .sendFile
    res.sendFile(path.join(__dirname, "index.html"));
})


    // let ski = [];
    // skillz.map((i,v)=>{
    //     if(resumeText.includes(v)){
    //         ski.push(1);
    //     } else {
    //         ski.push(0);
    //     }
    // })

const server = app.listen(port, ()=>{
    console.log(`App live on port ${port}`);
    console.log("#include <bits/stdc++.h>using namespace std;")
})

// const server = app.listen(3000, "127.0.0.1", () => {
//     console.log("Actually listening:", server.address());
// });

server.on("error", (err) => {
    console.error({
        code: err.code,
        errno: err.errno,
        syscall: err.syscall,
        address: err.address,
        port: err.port,
        message: err.message
    });
});
