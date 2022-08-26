const express = require("express");
const cors = require("cors");
require("./DBConnection/conn");
const farmer = require("./Routers/farmerRoute");
const app = express();
const port = process.env.PORT || 8000;

//Insert data in user collection and getting from API and
app.use(cors())
app.use(express.json());
// 3: we need to register our router 
app.use(farmer);
app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});