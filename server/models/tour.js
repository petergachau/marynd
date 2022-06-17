import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  projectTitle: {type:String,required:true},
  name:{type:String,required:true},
  faculty:{type:String,required:true},
  projectDesc: {type:String,required:true},
  milestone: {type:String},
  course:{type:String},
  regNo: {type:String,required:true},
  inProgress:Boolean,
   milestoneDesc: {type:String},
  
  creator: String,
  status:{
    type:String,
    enum:['pending','success', 'rejected'],
     default:'pending'
  },
 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;
