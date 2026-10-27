
import Skills from "../components/Skill";
import SkillsBar from "../components/SkillsBar";
import reactImg from "../assets/react.svg";
import docc from "../assets/doc1.pdf";
import iconDia from "../assets/diamond-solid-full.svg";
import iconHea from "../assets/heart-solid-full.svg";
import "../components/CompanyThumbnail.css"
import "./Companies.css";

import "./Profile.css";
import ComThmnail from "../components/comThmnail";

let skillzList = ["c++", "java", "python","c#"];
    let skillVals = [9,5,1,4];
    let maxVal = 10;
    let name ="XYV";

    const {target, targMatches} = {
    "target": {
        "_id": "6ad758c5135cff63e90bc0c9",
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
    "targMatches": [
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

            <div className="utarg">
                <div className="header">
                    TARGET
                </div>
                <div className='ctheader'>
                    <img className="fimg" src={iconDia} width="50"></img>
                    {/* <div className="cinfo"> */}
                        <img className="cimg" src={target.dpPath} width="50" alt="company logo"></img>
                        <div className="cname">{target.name}</div>
                    {/* </div> */}
                    <button className="gotoprep">Prep</button>
                </div>
    
                <div className="cthmatch skm">
                    Skill Match: {targMatches[0].matchScore}
                </div>
    
                <div className="cthintpt skm">
                    Interest: {targMatches[0].coreIntpt}
                </div>
            </div>


            <div className="ufavc">
                <div className="header">
                    FAVS
                </div>
                <div className="showcase">
                    {favComp.map((v,i)=>(
                        <ComThmnail key={i} name={v.company.name} imgSrc={v.company.dpPath} matchScore={v.matches[0].matchScore} coreIntPt={v.matches[0].coreIntpt} targ={v.company._id===target._id} fav={ true} />
                    ))}
                </div>
                
            </div>
             
        </div>

    );
}