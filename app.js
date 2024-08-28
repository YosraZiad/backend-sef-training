const express=require("express")

const connectToDb=require('./config/connectToDb')

require("dotenv").config()

//connection DB
connectToDb();

//init App
const app= express();

//Middlewares
app.use(express.json())

//Routes
app.use("/api/ArticleCategory", require("./Routers/articleCategoryRoute"));

//Running  The Server
const PORT=process.env.PORT ||8000

app.listen(PORT,()=>{
  console.log(`Server  is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})


