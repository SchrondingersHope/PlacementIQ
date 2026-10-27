
const review = {
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
    };

export default function Review({review}){

    return(
        <div className="cth">
            <div className='ctheader'>
                <div className="cinfo">
                    <img className="cimg" src={review.userDP} width="50"></img>
                    <div className="cname">{review.userName}</div>
                </div>
                <div className="uchoice">
                    {/* better way to show upvote lol */}
                    <button>Upvote</button>
                    {/* <img className={fav? "cimg fav": "cimg unsel"} src={iconHea} width="50"></img> */}
                </div>
            </div>

            <div className="cthmatch">
                {review.rev}
            </div>
        </div>
    )
}