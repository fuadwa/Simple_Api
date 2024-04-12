import express from 'express';
import userRoutes from './user.routes';
import mainRoutes from './main.routes';
import { StatusCodes } from 'http-status-codes';
const app=express();
const port=8080;

app.use(express.json());
app.use('/v1/user',userRoutes)

app.use('/v1',mainRoutes)
app.listen(port,()=>{
    console.log(`hey,go to localhost :${port}`)
})