const express = require('express');
const path=require("path");
const cors=require("cors")


const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname,'public')))

const routes=require('./src/routes/routes')

app.use('/',routes);


app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
