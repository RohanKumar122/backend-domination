const express =require("express");
const app =express();
const ownerRouter =require("./Routes/ownerRouter")
const productRouter =require("./Routes/productRouter")
const usersRouter =require("./Routes/userRouter")
const cookieParser =require("cookie-parser");
const path = require("path");

const db =require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

// app.use("/owners",ownerRouter)
// app.use("/users",usersRouter)
// app.use("/products",productRouter)

app.get("/",(req,res)=>{
    res.send("hey")
})

app.listen(3000);
