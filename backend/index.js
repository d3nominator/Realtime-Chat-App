const express = require('express'); // Express web server framework
const cors = require('cors');   // Allow CORS
const axios = require('axios');
const { header } = require('express/lib/request');

const app = express();  // Create an express app

app.use(cors({origin : true})); // Allow CORS
app.use(express.json());    // to support JSON-encoded bodies


// Path: backend\index.js
app.post("/authenticate",async (req, res) => {
    // Get the username and password from the request body
    const {username} = req.body;
    
        try{ 
            const result = await axios.put("https://api.chatengine.io/users/",
            {username: username, secret: username, first_name: username},
            {headers:{"private-key":"cee33980-e977-4a81-b16a-6facdb2237bb"}});
            return res.status(result.status).json(result.data);
        }
        catch (err) {
            return res.status(err.response.status).json(err.response.data);
        }
    
});
    
// return res.json({username: username, secret : "sha256...." });

// Path: backend\index.js
app.listen(3000, () => {
    console.log("Server started on port 3000");   
});
