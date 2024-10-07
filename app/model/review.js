import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    review:String,
    name:String,
    email:String,
    city:String,
    stras:String
})
export let Review = mongoose.models.Review || mongoose.model("Review",userSchema);