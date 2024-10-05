import { User } from "@/app/model/user";
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
   

let user = await  User.find();

console.log(user);


return NextResponse.json({
    success:true,
    users:user
})


}


export async  function POST(req,res){

    // let data = await req.json();

    let data;

    let dataType = req.headers.get('content-type');

    if(dataType == 'application/json'){
        data = await req.json();
    }else{

        data = await req.formData();
    }
    
    
     

   
    if( dataType !="application/json" &&  data.get("action") == "signup"){


        let paraHua = await User.findOne({email:data.get("Email")});
      
        
        if(paraHua){
            return NextResponse.json({
                success:false,
                message:"User ALready Existed"
            })
        }
      
     

      let userData={
        Name:data.get("Name"),
        LastName:data.get("LastName"),
        Email:data.get("Email"),
        Password:data.get("Password"),
        Company:data.get("Company"),
           }

      let nyaUser = await new User(userData);
      nyaUser.save();
console.log(nyaUser);


        return NextResponse.json({success:true});


    }else if(data.action == "session-check"){
    try{

        // console.log("##########");
        

    let verifiedData =  await isauthenticated(req);

       
    

    if(verifiedData){
        // console.log("***********");
        
        console.log(verifiedData);

       let user = await User.findById(verifiedData.meriID);
       return NextResponse.json({
        user
    });


    }



}catch(e){

    return NextResponse.json({});

}

    //    try{


        
    //     let verifiedData = await verify(data.token);

    //     console.log(verifiedData)

    //     if(verifiedData){
    //         let user = await User.findById(verifiedData.meriID);
    //        return NextResponse.json({
    //          user
    //          })
    //     }

    //    }catch(e){

    //  return NextResponse.json({});

    //     }
       
        
    // }
console.log("chalaga  waa");


 

  

return NextResponse.json({
    success:true
})


}

}