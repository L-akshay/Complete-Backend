require("dotenv").config();

const app = require("./src/app")
const ConnectDb=require("././src/DB/db")
ConnectDb()
app.listen(3000,()=>{
  console.log("server started")
})
