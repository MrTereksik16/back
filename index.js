import express from "express";
import cors from "cors"

const app = express()

app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })

const port = 3000;

app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })

app.use(cors())

app.get("/", (req, res)=>{
   	const date = new Date().getTime()
	console.log(date)	
	res.status(200).send(date.toString());
})

app.listen(port, ()=>{
   console.log(1234);
})
