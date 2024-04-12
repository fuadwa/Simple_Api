import express from 'express';
import { OK, StatusCodes } from 'http-status-codes';
const router=express.Router();

router.get('/ping',(req,res)=>{
    res.status(StatusCodes.OK);
    res.send('OK1');
});

export default router;