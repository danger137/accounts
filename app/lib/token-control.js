import *  as jose from "jose"


export const isauthenticated = async(req)=>{

const tokken = req.header.get("authorization") || req.header.get("Authorization");

if(tokken){

try{
  
   
    const seceret = new TextEncoder().encode(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJpSUQiOiI2NmI0YjE4NGJlZDIxZDdiYzk3NTJjY2IiLCJpYXQiOjE3MjMxNDU2NDYsImV4cCI6MTcyMzE1Mjg0Nn0.9BKAg466VXcePWmI-5zSeiuPFxyksFiC9H628UbQEJY"
    )

    const encode = await jose.jwtVerify(tokken,seceret);

    if(encode.payload?.meriId){
      return encode.payload?.meriId;
    }else{
      return false;
    }

 
}catch(e){
  console.log("authenticated failed " + e.message);
  
  return false;
}
}else{
  return false;
}


}

