const mongoose=require("mongoose");


async function ConnectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is missing from environment variables.");
  }

  await mongoose.connect(mongoUri)
  console.log("connected TO DB") 
  
}

module.exports=ConnectDB
