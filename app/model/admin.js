import mongoose from "mongoose";

let adShema = mongoose.Schema({
 Email:String,
 Password:String
})

export  let AD = mongoose.models.admin || mongoose.model("admin",adShema);

