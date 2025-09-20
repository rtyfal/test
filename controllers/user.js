const fs = require('fs').promises
const path = require("path")
const getDataFromDb = require("../utils/db")
const dbpath = path.join(__dirname, "..", "db/db.json")


exports.getAllUsers = async (req,res,next) => {
    try{
        const users = await getDataFromDb(dbpath)

        res.status(200).json({
            message:"Users",
            users
        })
    }catch(err){
        return res.status(err.status).json({message: err.message})
    }
}

exports.getUserById = async (req,res,next) => {
    try{
        const users = await getDataFromDb(dbpath);
        const params = req.params;

        const id = params.id;

        const user = users.map((el)=>{
            if(el.id === +id){
                return el;
            }
        })

        if(!user[0]){
            const error = new Error();
            error.message = "Not found";
            error.status = 404;
            throw error
        }

        return res.status(200).json({
            message:"User founded",
            user
        })
    }catch(err){
        return res.status(err.status).json({message: err.message})
    }
}

exports.createUser = async (req,res,next) => {
    try{
        const { name, surname,age } = req.body;

        if(!name || !surname || !age){
            const error = new Error();
            error.message = "Error occured"
            error.status = 400;
            throw error
        }
        const id =  Math.floor(Math.random() * 10000000000);
        const users = await getDataFromDb(dbpath)
        console.log(users)
        const user = {
            id,
            name,
            surname,
            age
        }

        users.push(user)

        await fs.writeFile(dbpath, JSON.stringify(users), "utf-8")

        res.status(201).json({
            message:"Created",
            user
        })
    }catch(err){
        return res.status(err.status).json({message: err.message})
    }
}