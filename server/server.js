// require and instance express into an 'app' variable
const express = require('express');
const app = express();

// hardcode your port, optionally
const port = 8002;

// require and .use cors
// letting us send cross origin requests from
// react's port 3000 to our server's port
const cors = require('cors');
app.use(cors());

// make sure express is set for json
app.use(express.json())

// require db, require routes and pass routes app
require('./config/database');
require('./routes/routes')(app);


// listen on port.
// i recommend also naming the app and the port in the run message.
// have often seen people running the wrong project and not realizing it
app.listen(port, () => {
    console.log(`Dog app running on ${port}`);
})
