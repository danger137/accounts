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
    "eyJhbGciOiJIUzI1NiJ9.eyJtZXJpSUQiOiI2NzAxYzgwYzRjMGM2ZjE1NTk3OGM1YzAifQ.cCqbP6vWvpmtXWGFWMuSwM8rPBy-GJq8lEv71LnTX84"
  )
 

const tokken =  await new  jose.SignJWT({meriID:user._id})
.setProtectedHeader({alg:"HS256"})
.sign(serect)

console.log(tokken);


return NextResponse.json({user,tokken});


}

return NextResponse.json( null);

}