
const fs = require('fs');
const path = require('path');
const { __path } = require('../index');
const express = require('express');
const app = express()
const port = 8000
app.use(express.static(path.join("./react/build")));
    app.get("/api", (req, res) => {
      res.sendFile("./react/build/index.html")
      //res.send("API is running..");
    });
    
    


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
