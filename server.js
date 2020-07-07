const path = require("path");
const express = require('express')
const app = express();

const PORT = process.env.PORT || 80;
 
app.use("/css", express.static("site/css"));
app.use("/js", express.static("site/js"));
app.use("/assets/img", express.static("site/assets/img"));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "site/index.html"));
})

app.listen(PORT, ()=>{
    console.log("Server hass been started...");
})
