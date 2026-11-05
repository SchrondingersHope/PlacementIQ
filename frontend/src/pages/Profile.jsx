
import Skills from "../components/Skill";
import SkillsBar from "../components/SkillsBar";
import reactImg from "../assets/react.svg";
import docc from "../assets/doc1.pdf";
import iconDia from "../assets/diamond-solid-full.svg";
import iconHea from "../assets/heart-solid-full.svg";
import "../components/CompanyThumbnail.css"
import "./Companies.css";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { store } from "../store";
import axiosClient from "../api/axiosClient";
import ComThmnail from "../components/comThmnail";

let skillzList = ["c++", "java", "python"];
let maxVal = 10;
    

//     const {target, targMatches} = {
//     "target": {
//         "_id": "6ad758c5135cff63e90bc0c9",
//         "dpPath": "../assets/react.svg",
//         "name": "ABC3",
//         "overview": "A great company to work at that creates good products.",
//         "roles": [
//             {
//                 "roleName": "SWE",
//                 "roleDesc": "Great role to work for python.",
//                 "req": [
//                     0,
//                     0,
//                     1
//                 ],
//                 "_id": "6ad758c5135cff63e90bc0ca"
//             },
//             {
//                 "roleName": "MLE",
//                 "roleDesc": "Great role to work for python.",
//                 "req": [
//                     0,
//                     0,
//                     1
//                 ],
//                 "_id": "6addebe44958cd8d8295d14e"
//             }
//         ],
//         "totFavees": 0,
//         "totTarees": 0,
//         "createdAt": "2026-10-20T12:04:21.032Z",
//         "updatedAt": "2026-10-25T11:48:47.618Z",
//         "__v": 2
//     },
//     "targMatches": [
//         {
//             "_id": "6ad77faa46e21020a1b8d1eb",
//             "studentID": "6ad77fa946e21020a1b8d1e8",
//             "companyID": "6ad758c5135cff63e90bc0c9",
//             "role": "SWE",
//             "matchArr": [
//                 0,
//                 0,
//                 0
//             ],
//             "matchScore": 0,
//             "interestScore": 55.62468041041968,
//             "coreIntpt": "Smth",
//             "createdAt": "2026-10-20T14:50:18.078Z",
//             "updatedAt": "2026-10-20T14:50:18.078Z",
//             "__v": 0
//         }
//     ]
// }

[
    {
        "_id": "6ad758c5135cff63e90bc0c9",
        "dpPath": "public\\assets\\images\\1792497861008-Screenshot (12).png",
        "name": "ABC3",
        "overview": "A great company to work at that creates good products.",
        "roles": [
            {
                "roleName": "SWE",
                "roleDesc": "Great role to work for python.",
                "req": [
                    0,
                    0,
                    1
                ],
                "_id": "6ad758c5135cff63e90bc0ca"
            },
            {
                "roleName": "MLE",
                "roleDesc": "Great role to work for python.",
                "req": [
                    0,
                    0,
                    1
                ],
                "_id": "6addebe44958cd8d8295d14e"
            }
        ],
        "totFavees": 1,
        "totTarees": 0,
        "createdAt": "2026-10-20T12:04:21.032Z",
        "updatedAt": "2026-10-25T11:48:47.618Z",
        "__v": 2,
        "idd": "6ad758c5135cff63e90bc0c9",
        "match": [
            {
                "role": "MLE",
                "matchArr": [
                    0,
                    0,
                    0
                ],
                "matchScore": 0,
                "interestScore": 47.32089499866876,
                "coreIntpt": "Smth",
                "__v": 0,
                "createdAt": "2026-10-26T14:04:49.362Z",
                "updatedAt": "2026-10-26T14:04:49.362Z"
            }
        ]
    }
]

const favComp = [
    {
        "company": {
            "_id": "6ad758c135cff63e90bc0c9",
            "dpPath": "../assets/react.svg",
            "name": "ABC3",
            "overview": "A great company to work at that creates good products.",
            "roles": [
                {
                    "roleName": "SWE",
                    "roleDesc": "Great role to work for python.",
                    "req": [
                        0,
                        0,
                        1
                    ],
                    "_id": "6ad758c5135cff63e90bc0ca"
                },
                {
                    "roleName": "MLE",
                    "roleDesc": "Great role to work for python.",
                    "req": [
                        0,
                        0,
                        1
                    ],
                    "_id": "6addebe44958cd8d8295d14e"
                }
            ],
            "totFavees": 0,
            "totTarees": 0,
            "createdAt": "2026-10-20T12:04:21.032Z",
            "updatedAt": "2026-10-25T11:48:47.618Z",
            "__v": 2
        },
        "matches": [
            {
                "_id": "6ad77faa46e21020a1b8d1eb",
                "studentID": "6ad77fa946e21020a1b8d1e8",
                "companyID": "6ad758c5135cff63e90bc0c9",
                "role": "SWE",
                "matchArr": [
                    0,
                    0,
                    0
                ],
                "matchScore": 0,
                "interestScore": 55.62468041041968,
                "coreIntpt": "Smth",
                "createdAt": "2026-10-20T14:50:18.078Z",
                "updatedAt": "2026-10-20T14:50:18.078Z",
                "__v": 0
            }
        ]
    },
    {
        "company": {
            "_id": "6ad7585135cff63e90bc0c9",
            "dpPath": "../assets/react.svg",
            "name": "ABC3",
            "overview": "A great company to work at that creates good products.",
            "roles": [
                {
                    "roleName": "SWE",
                    "roleDesc": "Great role to work for python.",
                    "req": [
                        0,
                        0,
                        1
                    ],
                    "_id": "6ad758c5135cff63e90bc0ca"
                },
                {
                    "roleName": "MLE",
                    "roleDesc": "Great role to work for python.",
                    "req": [
                        0,
                        0,
                        1
                    ],
                    "_id": "6addebe44958cd8d8295d14e"
                }
            ],
            "totFavees": 0,
            "totTarees": 0,
            "createdAt": "2026-10-20T12:04:21.032Z",
            "updatedAt": "2026-10-25T11:48:47.618Z",
            "__v": 2
        },
        "matches": [
            {
                "_id": "6ad77faa46e21020a1b8d1eb",
                "studentID": "6ad77fa946e21020a1b8d1e8",
                "companyID": "6ad758c5135cff63e90bc0c9",
                "role": "SWE",
                "matchArr": [
                    0,
                    0,
                    0
                ],
                "matchScore": 0,
                "interestScore": 55.62468041041968,
                "coreIntpt": "Smth",
                "createdAt": "2026-10-20T14:50:18.078Z",
                "updatedAt": "2026-10-20T14:50:18.078Z",
                "__v": 0
            }
        ]
    }
];

export default function Profile(){
    const [targ, setTarg] = useState(null);
    const [targMatch, setTargMatch] = useState(null);
    const [favs, setFavs] = useState(null);
    const [loading, setLoading] = useState(false);

    const user = useSelector((state)=>state.auth.user);
    console.log("user_xyz", user);
    let name = user.userName;
    let skillVals = user.skills;
    console.log(user);

    const navigate = useNavigate();

    const getUserTarg = async()=>{
        const endp = `/user/${user._id}/target`;

        try{
            const res = await axiosClient.get(endp);
            const {target, targMatches} = res.data;
            setTarg(target);
            setTargMatch(targMatches);
            // dispatch(setLogin({user, token}));
            console.log("target retrieved!");
            // navigate('/profile', { replace: true }); 

        } catch(err){
            setErr(err.response?.data?.error || "Retrieval failed");
            console.log(err);
        }
    }

    const getUserFavs = async()=>{
        const endp = `/user/${user._id}/favs`;

        try{
            const res = await axiosClient.get(endp);
            // const {target, targMatches} = res.data;
            setFavs(res.data);
            // setTargMatch(targMatches);
            // dispatch(setLogin({user, token}));
            console.log("favs retrieved!");
            // navigate('/profile', { replace: true }); 

        } catch(err){
            setErr(err.response?.data?.error || "Retrieval failed");
            console.log(err);
        }
    }

    const gotoPrep=(e)=>{
        navigate('/prep', { replace: true }); 
    }

    const gotoTC = (e)=>{
        console.log(e.target.className=="gotoprep");
        if(e.target.className=="gotoprep"){
            navigate('/prep', { replace: true });
        }else{
            navigate(`/company/${targ._id}`, { replace: true }); 
        }
    }

    useEffect(()=>{
        try{
            getUserTarg();
            getUserFavs();
        } catch(err){

        } finally {
            setLoading(false);
        }
    },[]);

    return(
        <div className="uprof">
            <div className='heading'>Profile Page!!</div>
            <div className="udetails">
                <img src={reactImg} width='100'/>
                <div className="uname">{name}</div>
                {/* or we can do onclick lol */}
                <a className="uresume" href="docc">Resume</a>
            </div>


            
            <SkillsBar skillVals={skillVals} skillzList={skillzList} maxVal={maxVal}/>

            <div className="utarg" onClick={gotoTC}>
                <div className="header">
                    TARGET
                </div>
                <div className='ctheader'>
                    <img className="fimg" src={iconDia} width="50"></img>
                    {/* <div className="cinfo"> */}
                        <img className="cimg" src={targ?.dpPath} width="50" alt="company logo"></img>
                        <div className="cname">{targ?.name}</div>
                    {/* </div> */}
                    <button className="gotoprep" onClick={gotoPrep}>Prep</button>
                </div>
    
                <div className="cthmatch skm">
                    Skill Match: {targMatch? targMatch[0].matchScore : 0}
                </div>
    
                <div className="cthintpt skm">
                    Interest: {targMatch? targMatch[0].coreIntpt : 0}
                </div>
            </div>


            <div className="ufavc">
                <div className="header">
                    FAVS
                </div>
                <div className="showcase">
                    {favs?.map((v,i)=>(
                        <ComThmnail key={i} name={v.name} imgSrc={v.dpPath} matchScore={v.match[0].matchScore} coreIntPt={v.match[0].coreIntpt} targ={v._id===targ._id} fav={ true} id={v.company._id} />
                    ))}
                </div>
                
            </div>
             
        </div>

    );
}