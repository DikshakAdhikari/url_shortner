import express from 'express'
import urlRouter from './routes/url'
import userRouter from './routes/user'
const app= express();
import cors from 'cors'
import dotenv from 'dotenv'
 dotenv.config()
 const port= process.env.PORT
 import { mongooseConnect } from './connection/connect';
 import cookieParser from 'cookie-parser'
import { urlModel } from './models/url';
 app.use(cors({
     origin: 'http://localhost:3001', 
     credentials: true, 
   })); 

 app.use(cookieParser())
 app.use(express.urlencoded({extended:false})) //It is used to handle form data as request
app.use(express.json())
mongooseConnect()

app.use('/url', urlRouter)
app.use('/user', userRouter)


app.get('/:id', async(req,res)=> {
  try{
    const tinyUrl = req.params.id;
  const validUrl= await urlModel.findOne({shortId:tinyUrl})
  console.log(validUrl?.redirectUrl);
  
    if(validUrl){
      const urlDoc = await urlModel.updateOne(
        { shortId: tinyUrl },
        { $push: { visitHistory: { timestamp: Date.now() } } }
      );
       res.set('Cache-Control', 'no-cache');
       res.redirect(validUrl.redirectUrl)
    }
  
  }catch(err){
    console.log(err);
    
  }
  
})

app.listen(port, ()=> console.log(`Server is listening on port ${port}`)
)


