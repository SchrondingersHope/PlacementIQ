
import devImg from "../../assets/dev1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { store } from "../../store";
import { useDispatch } from "react-redux";
import { setLogin, store } from "../../store";
import axiosClient from "../../api/axiosClient";
import "./Signup.css"


export default function Signup(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formD, setFormD] = useState({userName:"",
            email:"",
            password:"",
            targetCompanyID:"6ad761f10c384eef6abe22ce",
        })
    const [files, setFiles] = useState({ picture: null, resume: null });
    const [err, setErr]= useState(null);

    const gotoLogin =()=>{
        navigate('/login', { replace: true }); 
    }

    const handleTextChange = (e) =>{
        setFormD({...formD, [e.target.name]: e.target.value});
    }
    const handleFileChange = (e) =>{
        setFiles({...files, [e.target.name]:e.target.files[0]});
    }

    const handleLogin = async(e) =>{
        e.preventDefault();
        console.log("this got connected!");
        setErr(null);
        const endp = '/auth/register';

        const data = new FormData();
        data.append('userName', formD.userName);
        data.append('email', formD.email);
        data.append('password', formD.password);
        data.append('targetCompanyID', formD.targetCompanyID);

        if(files.picture) data.append('picture', files.picture);
        if(files.resume) data.append('resume', files.resume);

        console.log(data);
        try{
            const res = await axiosClient.post(endp, data);
            const {token, user} = res.data;
            dispatch(setLogin({user, token}));
            console.log("Signed in!!");
            navigate('/profile', { replace: true }); 

        } catch(err){
            setErr(err.response?.data?.error || "Auth failed");
            console.log(err);
        }
    }

    return(
        // after signup, login by itself
        <div className="comies">
            <div className="heading">Signup Page!!</div>

             {/* userName,
            email,
            password,

            // resumePath,
            targetCompanyID,
            favCompanies,
            // skills,
            priority, */}

            <form onSubmit={handleLogin}>
                <img src="devImg" width="100px" />
                    
                <div></div>
                <div className="ip">
                    <label>UserName</label>
                    <input type="text" name="userName" placeholder="Name" onChange={handleTextChange} required/>
                </div>
                
                <div className="ip">
                    <label>Email Address</label>
                    <input type="text" name="email" onChange={handleTextChange} required/>
                </div>

                <div className="ip">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleTextChange} required/>
                </div>

                <label>Target Company</label>
                
                <select name="targetCompanyID" id="state" value={formD.targetCompanyID} onChange={handleTextChange}>
                    <option value="6ad761f10c384eef6abe22ce">ABC</option>
                    <option value="6ad758c5135cff63e90bc0c9">ABC3</option>
                    <option value="6addf38d334bb5b01f27f54a">ABC2</option>
                </select>
                
                <div className="ip">
                    <label>Upload Photo</label>
                    <input type="file" name="picture" onChange={handleFileChange} />
                </div>

                <div className="ip">
                    <label>Upload Resume</label>
                    <input type="file" name="resume" onChange={handleFileChange} required/>
                </div>

                <label>Additional Information</label>
                <textarea rows="4" cols="50" placeholder="Optional"></textarea>
                
                <div></div>
                <div>
                    <input type="submit"/>
                    <input type="reset" />
                </div>
            </form>

            <div className="login" onClick={gotoLogin}>
                Already Registered? 
                <button >
                    Sign in.
                </button>
            </div>
        </div>
    );
}