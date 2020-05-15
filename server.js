const express = require('express');
const app = express();
const port = 8002;

const cors = require('cors');
app.use(cors());

app.use(express.json())

require('./config/database');
require('./routes/routes')(app);


app.listen(port, () => {
    console.log(`Dog app running on ${port}`);
})
