import { useParams } from "react-router-dom";
import { useState } from "react";
import iconDia from "../assets/diamond-solid-full.svg";
import iconHea from "../assets/heart-solid-full.svg";
import Role from "../components/Role.jsx"
import "./Company.css";
import Review from "../components/Review.jsx";

let skillzList = ["c++", "java", "python","c#"];

let interviewRevs = [
    {
        "_id": "6ad79a29365dae6f970ef5fe",
        "companyID": "6ad758c5135cff63e90bc0c9",
        "companyName": "ABC3",
        "companyDP": "public\\assets\\images\\1792497861008-Screenshot (12).png",
        "userID": "6ad787d87d9751412d74e0aa",
        "userName": "ed1",
        "userDP": "public\\assets\\images\\1792509911899-Screenshot (15).png",
        "rev": "smth i talked about",
        "interviewRev": true,
        "upcount": {},
        "createdAt": "2026-10-20T16:43:21.239Z",
        "updatedAt": "2026-10-20T16:43:21.239Z",
        "__v": 0
    },
    {
        "_id": "6adf2c96954f1bc53d6b22d6",
        "companyID": "6ad758c5135cff63e90bc0c9",
        "companyName": "ABC3",
        "companyDP": "public\\assets\\images\\1792497861008-Screenshot (12).png",
        "userID": "6ad787d87d9751412d74e0aa",
        "userName": "ed1",
        "userDP": "public\\assets\\images\\1792509911899-Screenshot (15).png",
        "rev": "smth i shouldve talked about.",
        "interviewRev": true,
        "upcount": {},
        "createdAt": "2026-10-26T10:33:58.411Z",
        "updatedAt": "2026-10-26T10:33:58.411Z",
        "__v": 0
    }];
let companyRevs = [
    {
        "_id": "6adf71e3fdac0b7e2c50b342",
        "companyID": "6ad758c5135cff63e90bc0c9",
        "companyName": "ABC3",
        "companyDP": "public\\assets\\images\\1792497861008-Screenshot (12).png",
        "userID": "6ad787d87d9751412d74e0aa",
        "userName": "ed1",
        "userDP": "public\\assets\\images\\1792509911899-Screenshot (15).png",
        "rev": "Terrible",
        "interviewRev": false,
        "upcount": {},
        "createdAt": "2026-10-26T15:29:39.532Z",
        "updatedAt": "2026-10-26T15:29:39.532Z",
        "__v": 0
    },
    {
        "_id": "6adf7205fdac0b7e2c50b345",
        "companyID": "6ad758c5135cff63e90bc0c9",
        "companyName": "ABC3",
        "companyDP": "public\\assets\\images\\1792497861008-Screenshot (12).png",
        "userID": "6ad787d87d9751412d74e0aa",
        "userName": "ed1",
        "userDP": "public\\assets\\images\\1792509911899-Screenshot (15).png",
        "rev": "Idk which company this one is lol.",
        "interviewRev": false,
        "upcount": {},
        "createdAt": "2026-10-26T15:30:13.902Z",
        "updatedAt": "2026-10-26T15:30:13.902Z",
        "__v": 0
    }
]

export default function Company(){
    //  useParams(): Fetches whatever is in the URL segment
    const { companyID } = useParams(); 
    //axios call from backend
    const company = {
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
                "_id": "6ad758c5135cff63e90bc0ca",
                "matcheScore": 0,
                "matchArr": [
                    0,
                    0,
                    0
                ]
            },
            {
                "roleName": "MLE",
                "roleDesc": "Great role to work for python.",
                "req": [
                    0,
                    0,
                    1
                ],
                "_id": "6addebe44958cd8d8295d14e",
                "matcheScore": 0,
                "matchArr": [
                    0,
                    0,
                    0
                ]
            }
        ],
        "totFavees": 0,
        "totTarees": 0,
        "createdAt": "2026-10-20T12:04:21.032Z",
        "updatedAt": "2026-10-25T11:48:47.618Z",
        "__v": 2,
        "matchScore": 0,
        "coreIntpt": "Smth"
    };
    let targ = false, fav=true;
    // call backend and fetch company info

    return(
        
        <div className="comies">
            <div className='heading'>Company Page!!</div>

            <div className="ctop">
                <img className="cimg" src={company.dpPath} width="50"></img>
                <h2 className="cname">{company.name}</h2>
                
                <div className="uchoice">
                    <img className={targ? "cimg targ": "cimg unsel"} src={iconDia} width="50"></img>
                    <img className={fav? "cimg fav": "cimg unsel"} src={iconHea} width="50"></img>
                </div>
            </div>

            <div className="ovrvw">
                <div className="header">OVERVIEW</div>
                <div className="desc">{company.overview}</div>
            </div>
            <div className="intpt">
                <div className="header">INTEREST POINT</div>
                <div className="desc">{company.coreIntpt}</div>
            </div>
            
            <div className="roles">
                <div className="header">ROLES</div>
                <div className="showcase">
                    {company.roles.map((v,i)=>(
                        <Role key={i} role={v} skillzList={skillzList}/>
                    ))}
                </div>
            </div>

            <div className="reviews">
                <div className="revs">
                    <div className="rhead">
                        <div className="header">
                            INTERVIEW REVIEWS 
                        </div>
                        <div className="showcase">
                            {interviewRevs.map((v,i)=>(
                                <Review review={v}/>
                            ))}
                        </div>

                    </div>
                    

                </div>
                <div className="revs">
                    <div className="header">
                        COMPANY REVIEWS 
                    </div>
                    <div className="showcase">
                            {companyRevs.map((v,i)=>(
                                <Review review={v}/>
                            ))}
                    </div>
                </div>
            </div>
            
        </div>        
    );
}