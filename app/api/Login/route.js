import { User } from "@/app/model/user";
import { NextResponse } from "next/server";
import jsonwebtoken  from "jsonwebtoken"
import * as jose from "jose";



export async function POST(req,res){

  let data = await req.json();

  
//  let user =   await User.findOne(data);

// if(user){
//   let token = jsonwebtoken.sign({meriID:user._id},"cat says mioon",{expiresIn:"2h"});
//   return NextResponse.json({
//     user,
//     token
//   })
// }

let user = await User.findOne(data);

console.log(user);


if(user){


  const serect = new TextEncoder().encode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJpSUQiOiI2NmI0YjE4NGJlZDIxZDdiYzk3NTJjY2IiLCJpYXQiOjE3MjMxNDU2NDYsImV4cCI6MTcyMzE1Mjg0Nn0.9BKAg466VXcePWmI-5zSeiuPFxyksFiC9H628UbQEJY"
  )
 

const tokken =  new  jose.SignJWT({meriID:user._id})
.setProtectedHeader({alg:"HS256"})
.sign(serect)

return NextResponse.json({user,tokken});


}

return NextResponse.json( null);

}