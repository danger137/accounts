import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    Name:String,
    LastName:String,
    Email:String,
    Password:String,
    Company:String
})
export let User = mongoose.models.user || mongoose.model("user",userSchema);