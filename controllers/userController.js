const users = require ('../data/user.js');


const getUsers = (req , res)=>{
    res.status(200).json(users);
}
const getUser = (req , res)=>{
    const userId = +req.params.id
    const user = users.find((u)=>u.id===userId)
    if(!user){
        return res.status(404).json('user not found')
    }
    res.status(200).json(user)
}
const addUser =(req ,res)=>{
    const{name,email}=req.body
    if(!name || !email){
        return res.status(400).json('need to name or email')
    }
    const newUser ={id : users.length + 1 ,name,email};
    users.push(newUser)
    return res.status(201).json(newUser)
}
const updateUser =(req,res)=>{
    const userId = +req.params.id;
    const {name,email} =req.body;
    const user = users.find((user)=>user.id===userId)
    if(!user){
        return status(404).json("user not found")

    }
    if(name)user.name =name;
    if(email)user.email =email;
    res.status(200).json(user)
}
const deleteUser = (req, res) => {
    const userId = +req.params.id;
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {getUsers,getUser,addUser,updateUser,deleteUser}