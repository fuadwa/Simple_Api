import users from '../data/users.data';
const get=(userId)=>users.find((user)=>user.id ===userId);
         
  

const getAll=()=> users;

export const insert = (details) => {
    const newUser = { id: users.length + 1, ...details };
    users.push(newUser);
    return newUser;
};

const update=(userId)=>{
    let existingUser=null;
    let userIndex;
    users.map((user,index)=>{
        if(user.id===userId)
        existingUser=user;
        userIndex=index;
    });
    if(!existingUser){
        return false;

    }
    const updateUser={
        ...existingUser,
        ...newDetails
    };
       users.splice(userIndex,1,updateUser);
        
   
    
}
const remove=(userId)=>{
   const deleteUser= (user,index)=>{
        if(user?.id===userId){
            users.splice(index,1);
           
        }
        
    }
return users.find(deleteUser)
    return doesUserExist;
}

export default {
   
    get,
    update,
    remove,
    getAll
}