import express from 'express';
import userService from './services/user.service'
import { StatusCodes } from 'http-status-codes';

import userController from './controllers/user.controller';
import userService from './services/user.service';
import {expressYupMiddleware} from 'express-yup-middleware';
import {addUser, updateUser} from './user.schema';
const router=express.Router();
const port=8080;
const STATUS={
    success:"OK",
    failure:"NO"
};


router.get('/all',(req,res)=>{
    const users=userService.getAllUsers();
    if(users.length){
        return res.status(StatusCodes.OK).send(users);
    }
    return res.status(StatusCodes.NOT_FOUND).send({
        status:STATUS.failure,
        message:'no users Found'
    }
        
    )
})
router.get('/ :id',(req,res)=>{
    const id=parseInt(req.params.id)
    const user=userService.getUser(id);
    if(user){
        return res.status(StatusCodes.OK).send(
            {
                status:STATUS.success,
                 user,
            }
        )
    }
   
    return res.status(StatusCodes.NOT_FOUND).send({
        status:STATUS.failure,
        message:`user ${id} is not  Found`
    }
        
    )
});
router.post('/',expressYupMiddleware({schemaValidator:addUser,expectedStatusCode:StatusCodes.BAD_REQUEST}),(req,res)=>{
 
    const {body:user}=req;
   const addedUser= userService.addUser(user)
   
    
   
    return res.status(StatusCodes.OK).send({
        status:STATUS.success,
        user:data
    })

})
router.put('/:id',expressYupMiddleware({schemaValidator:updateUser,expectedStatusCode:StatusCodes.BAD_REQUEST}),

   updateUser,
);
router.delete('/',(req,res)=>{
    const {params}=req;
const id=parseInt(params.id);
const user=userService.getUser(id);
if(user){
    userService.removeUser(id);
    return res.status(StatusCodes.OK).send({
        status:STATUS.success,
        message:`user ${id} has been deleted`,
     })
}
else {
 return res.status(StatusCodes.NOT_FOUND).send(
{
    status:STATUS.failure,
    message: `user ${id} hasn't been found`,
}
 )
       
    
}




})
export default router;