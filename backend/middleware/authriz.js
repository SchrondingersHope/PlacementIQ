import jwt from "jsonwebtoken";

export async function verifyToken(req,res,nex) {
    const auth = req.headers.authorization;

    if (!auth?.startsWith("Bearer ")) {
    return res.status(401).send("Missing token");
    }

    const token = auth.split(" ")[1];

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        nex();
    } catch (err) {
        console.log(err.name, err.message);
        return res.status(401).send("Invalid token");
    }

    // try{
    //     let token = req.headers.authorization;

    //     if(!token){
    //         return res.status(403).send("Access Denied.");
    //     }
    //     // if(token.startsWith("Bearer ")){
    //     //     token = token.slice(7, token.length).trimLeft();
    //     // }
        
    //     const verified = jwt.verify(token, process.env.JWT_SECRET);
    //     // req.user = verified;
    //     console.log("heh");
    //     console.log(verified);
    //     nex();
        
    // } catch(err){
    //     res.status(500).json({err: err.message});
    // }
}