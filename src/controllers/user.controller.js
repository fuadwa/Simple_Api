import userService from './services/user.service'
import { StatusCodes } from 'http-status-codes';
const updateUser=(req,res)=>{
    const {body:user}=req;
    const id=parseInt(req.params.id,10)
   const updatedUser= userService.updateUser(id,user)
   
    
   if(updatedUser){

   
    return res.status(StatusCodes.ok).send({
        status:STATUS.success,
        user: updatedUser
    })}
    else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status:STATUS.failure,
            message:`user ${id }is not found`
        });
    }
};
export default{
    updateUser
}

