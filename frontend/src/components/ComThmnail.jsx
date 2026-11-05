import './CompanyThumbnail.css';
import iconDia from "../assets/diamond-solid-full.svg";
import iconHea from "../assets/heart-solid-full.svg";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosClient from '../api/axiosClient';
// to-dos: 
// [] add separate colors to icons based on targ and fav val
// [] color of matchVal green if exceeds th1 or red if below th2 

export default function ComThmnail({imgSrc, name, matchScore, coreIntPt, targ,fav, id}){

    const navigate = useNavigate();
    const user = useSelector((state)=>state.auth.user);

    const favAComp = async ()=>{
        console.log(user);
        const endp = `/user/${user._id}/${id}/updateFav`;
        // `/:id/:favyID/updateFav`

        try{
            const res = await axiosClient.patch(endp);
            // const {target, targMatches} = res.data;
            fav = fav? false: true;
            console.log("Fav Updated!");

        } catch(err){
            setErr(err.response?.data?.error || "Retrieval failed");
            console.log(err);
        }
    }
    
    const handleClick = (e) =>{
        e.preventDefault();
        console.log(e.target.className);
        if(e.target.className==="cimg fav" || e.target.className==="cimg fav unsel"){
            favAComp();
            console.log("Fav updated!!")
        } else {
            navigate(`/company/${id}`, { replace: true });
        }     
    }

    return(
        <div className="cth" onClick={handleClick}>
            <div className='ctheader'>
                <div className="cinfo">
                    <img className="cimg" src={imgSrc} width="50"></img>
                    <div className="cname">{name}</div>
                </div>
                <div className="uchoice">
                    <img className={targ? "cimg targ": "cimg targ unsel"} src={iconDia} width="50" onClick={favAComp}></img>
                    <img className={fav? "cimg fav": "cimg fav unsel"} src={iconHea} width="50"></img>
                </div>
                {/* T:{targ} */}
                
                {/* <FontAwesomeIcon icon={byPrefixAndName.fas['heart']} style={{color: "rgb(164, 178, 188)",}} /> */}
            </div>

            <div className="cthmatch">
                Skill Match: {matchScore}
            </div>

            <div className="cthintpt">
                {coreIntPt}
            </div>
        </div>
    );
}