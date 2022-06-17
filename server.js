const { Router } = require('express');
const express = require('express');
const app = express()
const cors = require ('cors')

const corsOptions = {
    origin: 'http://localhost:53030'
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

const db = require("./app/models");

db.mongoose.connect(db.url)
.then(()=> {
    console.log("Connected to the database!");
})
.catch(err =>{
    console.log("Cannot connect to the database!", err);
    process.exit();
});
require("./app/routes/tutorial.routes")(app);


const PORT = process.env.PORT || 8020;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`)
})