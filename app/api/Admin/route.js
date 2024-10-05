
import jsonwebToken from "jsonwebtoken";
import { pipeline } from "stream";
import {promisify} from "util";
import fs from "fs";
import { isauthenticated } from "@/app/lib/token-control";
import { AD } from "@/app/model/admin";

const { NextResponse } = require("next/server");

let pump =  promisify(pipeline);








export async  function GET(req,res){

   

let user = await  User.find();

return NextResponse.json({
    success:true,
    users:user
})


}


export async  function POST(req,res){

  

 
let data = await req.formData();
console.log(data);

let userAds = {
    Email:data.get("Email"),
    Password:data.get("Password"),
 

 }
 
 let nyaAds = new AD(userAds);
 await nyaAds.save();


return NextResponse.json({success:true})

}

