import './Companies.css';
import ComThmnail from "../components/comThmnail";
import viteImg from "../assets/vite.svg";
import { useNavigate } from "react-router-dom";

// todos:
// [] searchbar 
// [] sort
// optional: [] filter
// function handleClick(){

//     navigate(`/company/1`, { replace: true }); 
// }

export default function Companies({companiesArr}){

    return(
        <div className="comies">
            <div className='heading'>Companies Page!!</div>
            {/* <div></div> */}
            <div className="csearch">
                <div className="searchbar">
                    {/* searchbar */}
                </div>
                <div className="sortdd">
                    {/* sort dropdown */}
                </div>
            </div>
            <div className="showcase">
                {/* {
                    companiesArr.map((comp,i)=>{
                        <ComThmnail imgSrc={viteImg} name="ABC" matchScore={70} coreIntPt="This is the coreIntPt" targ={false} fav={ true} />
                    })
                } */}
                
                <ComThmnail imgSrc={viteImg} name="ABCDEFGHIJKLMNOPIJJGHJJFGFBFBFBF" matchScore={70} coreIntPt="This is the coreIntPt" targ={true} fav={ true} id={3}/>
                <ComThmnail imgSrc={viteImg} name="ABC" matchScore={70} coreIntPt="This is the coreIntPt" targ={false} fav={ false} id={1}/>
                <ComThmnail imgSrc={viteImg} name="ABC" matchScore={70} coreIntPt="This is the coreIntPt" targ={false} fav={ false} id={2}/>
            </div> 
        </div>
    );
}