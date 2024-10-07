import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    fullName:String,
    CompanyName:String,
    email:String,
    selectedProduct:String
})
export let SUb = mongoose.models.Sub || mongoose.model("Sub",userSchema);