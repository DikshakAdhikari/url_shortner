import express from 'express'
import urlRouter from './routes/url'
import userRouter from './routes/user'
const app= express();
import dotenv from 'dotenv'
 dotenv.config()
 const port= process.env.PORT
 import { mongooseConnect } from './connection/connect';
 import cookieParser from 'cookie-parser'
 app.use(cookieParser())
 app.use(express.urlencoded({extended:false})) //It is used to handle form data as request
app.use(express.json())
mongooseConnect()

app.use('/url', urlRouter)
app.use('/user', userRouter)


app.get('/', (req,res)=> {
     res.send('Connected Successfully baby!')
})

app.listen(port, ()=> console.log(`Server is listening on port ${port}`)
)


