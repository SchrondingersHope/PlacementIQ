import './Companies.css';
import ComThmnail from "../components/comThmnail";
import viteImg from "../assets/vite.svg";

// todos:
// [] searchbar 
// [] sort
// optional: [] filter

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
                
                <ComThmnail imgSrc={viteImg} name="ABC" matchScore={70} coreIntPt="This is the coreIntPt" targ={true} fav={ true} />
                <ComThmnail imgSrc={viteImg} name="ABC" matchScore={70} coreIntPt="This is the coreIntPt" targ={false} fav={ false} />
                <ComThmnail imgSrc={viteImg} name="ABC" matchScore={70} coreIntPt="This is the coreIntPt" targ={false} fav={ false} />
            </div> 
        </div>
    );
}