import { NextResponse } from "next/server";



export async function middleware(req){

    try{
        const result = await isauthenticated(req);
        if(result){
            return NextResponse.next();
        }else{
            return NextResponse.json({success:false,code:403});
        }
    }catch(err){
        console.log(err);
        return NextResponse.json({success:false,code:403});
    }
    



}

export const config = {
    matcher:"/api/Ads"
}



