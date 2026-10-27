import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();

        navigate('/', { replace: true }); 
    }
    return(
        <div>
            Login Page!!
        </div>
    );
}