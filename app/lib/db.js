
import mongoose from "mongoose";


// const mongodb = process.env.MONGO_URL;

// if(!mongodb){
//     throw new Error(
//         "Please ENter Url"
//     )
// }

// let cahced = global.mongoose;

// if(!cahced){
//     cahced = global.mongoose = {conn:null,promise:null};
// }







 export async function connectDB(){

//     console.log("DB Connect Again");

//     if(cahced.conn){
//         return cahced.conn;
//     }

//     if(!cahced.promise){
//         const opts={
//             bufferCommands:false
//         }
//         cahced.promise = mongoose.connect(mongodb,opts).then((mongoose)=>{
//             console.log("DB COnnected");
//             return mongoose;
            
//         })
//     }
    
//     try{
//         cahced.conn = await cahced.promise
//     }catch(e){
//         cahced.promise = null;
//         throw e;
//     }

//     return cahced.conn;




    // mongoose.connect('mongodb+srv://dangerchamp2:Nokia927008@danger.itdb6sn.mongodb.net/hello').then((connect)=>{
    // console.log(connect);
    // console.log("Connect ho gi ha db");

    // }).catch((error)=>{
    //     console.log(error);
    // })
    mongoose.connect('mongodb://localhost:27017/glassDB').then((connect)=>{
    console.log(connect);
    console.log("Connect ho gi ha db");

    }).catch((error)=>{
        console.log(error);
    })




}