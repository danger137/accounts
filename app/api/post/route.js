import { AD } from "@/app/model/ad";
import { createReadStream } from "fs";
import { NextResponse } from "next/server";
import { pipeline } from "stream";
import {promisify} from "util";
import fs from  "fs";
import path from "path";








let pump = await promisify(pipeline);

export async function GET(req,res){





   let users;

 
      users = await AD.find();
   
    

    
    return NextResponse.json({
      success:true,
      user:users
    })
    
    }

export async function POST(req,res){

// let data = await req.json();
// console.log(data);

let data = await req.formData();

let file = data.get("picture");

let path = process.cwd()+"/public/ads/"+file.name;

pump(file.stream(),fs.createWriteStream(path));

let userAds = {
   title:data.get("title"),
   content:data.get("content"),
   date:data.get("date"),
   price:data.get("price"),
   owner:data.get("owner"),
   picture:"/ads/"+file.name
}
console.log(userAds);


let nyaAds = new AD(userAds);


await nyaAds.save();



return NextResponse.json({success:true})

}