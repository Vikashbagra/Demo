const express =  require("express")

const app = express()


app.set("view engine", 'hbs')

app.get("/",(req,res)=>{
    res.json({message : hello})
})




app.listen(process.env.PORT || 3000,()=>{
    console.log(`Your Server is started ${process.env.PORT || 3000}`)
} )