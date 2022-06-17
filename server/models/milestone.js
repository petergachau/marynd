import mongoose from "mongoose";

const mileSchema = mongoose.Schema({
  milestone: {type:String},
   milestoneDesc: {type:String},
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: String,
  status:{
    type:String,
    enum:['pending','success', 'rejected'],
     default:'pending'
  }
});

const MileModal = mongoose.model("mile", mileSchema);

export default MileModal;