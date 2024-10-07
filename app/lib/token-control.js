import * as jose from "jose";
export const isAuthenticated= async req=>{
 let token = req.headers.get("Authorization") ||
req.headers.get("Authorization");
console.log(token + " token mila");
if(token){
  try{
     let secret = new
    TextEncoder().encode("eyJhbGciOiJIUzI1NiJ9.eyJtZXJpSUQiOiI2NzAxYzgwYzRjMGM2ZjE1NTk3OGM1YzAifQ.cCqbP6vWvpmtXWGFWMuSwM8rPBy-GJq8lEv71LnTX84")
     let decoded=await jose.jwtVerify(token,secret);
   
     
     if(decoded.payload?.meriID){
     return decoded.payload?.meriID;
     }else{
     return false
     }
     }catch(err){
     console.log("authenticated error ");
     return false
    
     }
     }else{
     return false
     }
    
}
   
   


