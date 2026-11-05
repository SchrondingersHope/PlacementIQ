import Review from "../components/Review"

let revs = [
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
    },
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

export default function Reviews(){
    return(
        <div className="comies">
            <div className='heading'> Reviews Page!!</div>
            <div className="showcase">
                    {revs.map((v,i)=>(
                        <Review key={i} review={v}/>
                    ))}
            </div>
        </div>
    )
}