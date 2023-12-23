import express, { Request,Response, NextFunction } from 'express'
import { urlModel } from '../models/url'
import { nanoid } from 'nanoid'
import { userModel } from '../models/user';
const router= express.Router()

export const postUrlData = async (req: Request, res: Response)=> {
    try {
      const userId= req.headers['userId']
      const { redirectUrl }: { redirectUrl: string } = req.body;
      const shortId: string = nanoid(7);
  
    const data=  await urlModel.create({ shortId, redirectUrl , createdBy: userId});
    data.save()

      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };

  export const redirectToUrl= async(req:Request, res:Response)=> {
    try{
        const id =  req.params.id
        console.log(id);
        const urlDoc = await urlModel.findOneAndUpdate({shortId:id},{$push:{visitHistory:Date.now()}})        
        console.log(urlDoc);       
    }catch(err){
        res.status(404).json(err)
    }
  }

  export const getAnalytics= async (req:Request, res:Response)=> {
    try{
        const id= req.params.id
        const dateArray = await urlModel.findOne({shortId:id})
        //console.log(dateArray?.visitHistory.length);
        res.status(200).json(dateArray?.visitHistory.length)
        
    }catch(err){
        res.status(404).json(err)
    }
  }
  
  export const getAllUrls = async (req:Request, res:Response) => {
    try{
        console.log('fdfdfdfdf');       
        const urls= await urlModel.find({createdBy: req.headers["userId"]})
        console.log(urls);
    }catch(err){
      res.status(404).json(err)
    }
  }
  