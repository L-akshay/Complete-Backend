const mongoose=require("mongoose")

async function connectDB(){
  await mongoose.connect("")

  console.log("connecte to DB")


}
module.exports=connectDB
