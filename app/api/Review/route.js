import { User } from "@/app/model/user";
import jsonwebToken from "jsonwebtoken";
import { pipeline } from "stream";
import {promisify} from "util";

import { isauthenticated } from "@/app/lib/token-control";
import { Review } from "@/app/model/review";

const { NextResponse } = require("next/server");



function verify(token){

return new Promise(function(_then,_catch){
        jsonwebToken.verify(token,"cat says mioon", async function(error,data){
        if(data){
            _then(data);
        }else{
            _catch(error);
        }
      })
});



}


export async  function PUT(req,res){

    let user = await req.json();
 
    await User.findByIdAndUpdate(user._id, user);
     
     return NextResponse.json({
         success:true
     })
     
     
     }


export async  function DELETE(req,res){

   let id = req.nextUrl.searchParams.get("abc");
await User.findByIdAndDelete(id);
    
    return NextResponse.json({
        success:true
    })
    
    
    }


export async  function GET(req,res){

//    console.log("route mila");
   

let user = await  Review.find();




return NextResponse.json({
    success:true,
    users:user
})


}


export async  function POST(req,res){
    let data = await req.json();

    

     
     let nyaAds = new Review(data);
     await nyaAds.save();
    
    
    return NextResponse.json({success:true})

}