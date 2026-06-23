const mongoose=require("mongoose")

async function connectDB(){
  await mongoose.connect("mongodb+srv://lakshaydawar2006_db_user:otxdtrEtIWsBtrh5@lakshays.qelom0s.mongodb.net/youtube")

  console.log("connecte to DB")


}
module.exports=connectDB