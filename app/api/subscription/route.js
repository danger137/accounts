// import { User } from "@/app/model/user";
import { SUb } from "@/app/model/sub";
import jsonwebToken from "jsonwebtoken";
import { pipeline } from "stream";
import {promisify} from "util";

import { isauthenticated } from "@/app/lib/token-control";

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
    console.log(user);
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
   

let user = await  SUb.find();

console.log(user);


return NextResponse.json({
    success:true,
    users:user
})


}


export async  function POST(req,res){

    // console.log("route mila");
    


    let data = await req.json();

    

     
     let nyaAds = new SUb(data);
     await nyaAds.save();
    
    
    return NextResponse.json({success:true})

}