// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { setLogin, store } from "../../store";
// import axiosClient from "../../api/axiosClient";

// export default function Login(){
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [formD, setFormD] = useState({
//                 email:"",
//                 password:""})
//     const [err, setErr] = useState(null);
    
//     const gotoSignup =()=>{
//         navigate('/signup', { replace: true }); 
//     }

//     const handleTextChange = (e) =>{
//         setFormD({...formD, [e.target.name]: e.target.value});
//     }
//     const handleLogin = async(e) =>{
//         e.preventDefault();
//         console.log("this got connected!");
//         setErr(null);
//         const endp = '/auth/login';

//         console.log(formD);

//         // const data = new FormData();
//         // data.append('email', formD.email);
//         // data.append('password', formD.password);

        
//         // console.log(data);
//         try{
//             console.log(formD);
//             const res = await axiosClient.post(endp, formD);
//             console.log(res);
//             const {token, user} = res.data;
//             dispatch(setLogin({user, token}));
//             console.log("Signed in!!");
//             // navigate('/profile', { replace: true }); 
//             navigate('/', { replace: true }); 
//         } catch(err){
//             setErr(err.response || "Auth failed");
//             console.log(err);
//         }
//     }
//     return(
//         <div>
//             <div className="heading">Login Page!!</div>
//             <form onSubmit={handleLogin}>
//                 <label>Email</label>
//                 <input type="text" name="email" onChange={handleTextChange}></input>
//                 <label>Password</label>
//                 <input type="password" name="password" onChange={handleTextChange}></input>
//                 <input type="submit"></input>
//                 <div className="login" onClick={gotoSignup}>
//                     Not Registered? 
//                     <button >
//                         Sign up.
//                     </button>
//                 </div>
//             </form>
            
//         </div>
//     );
// }