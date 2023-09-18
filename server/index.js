const express = require('express')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')

const userRoute = require('./Routes/userRoute')

app.use(express.json());
app.use(cors());
require('dotenv').config();

app.use('/api/users/', userRoute)

app.get('/', (req, res) => {
    res.send("Welcome to a new api creation course")
})


const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;


app.listen(port, (req, res) => {
    console.log(`Server running on port : ${port}`)
})

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Mongodb connection established")).catch((error) => console.log("Mongodb connection failed:", error.message))

