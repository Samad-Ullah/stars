const User = require('../Models/user');
const jwt = require('jsonwebtoken');



exports.login = (req, res) =>{
    const {email , password} = req.body;
    User.findOne({ email }, (err, user)=>{
        // if no user and error
        if(err || !user){
            return res.status(401).json({
                error:
                "User with this email does not exists.Please sign in with registered email."
            })
        }
        // token generate with user id 
        const token = jwt.sign({_id:user.id}, process.env.JWT_SECRET);
        console.log(token);
        res.cookie("t", token, { expire: new Date() + 9999, httpOnly: true });

          //return response with user and token to frontend client
          return res.json({
            token,
            user: user,
        });


    })
}