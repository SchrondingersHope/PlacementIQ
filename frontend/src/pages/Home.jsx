import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <div className="heading">Home Page!!</div>
            <div className="header">
                <Link to="/signup"> SignUp</Link>
            </div>
            
        </div>
    );
}