import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  phone: { type: Number, required: true },
  password: { type: String, required: false },
  id: { type: String },
  isAdmin:{type:Boolean,default:false},
  dob:{type:Date},
    aob:{type:String},
    bloodGroup:{type:String},
    
    allergy:{type:String},
});

export default mongoose.model("User", userSchema);
