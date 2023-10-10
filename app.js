const express = require('express');
const setupMongoConnection  = require('./db/conn');
const port = 3000;
const app = express();

const userRoute = require('./routes/userRoutes');
const jokeRoute = require('./routes/jokesRoutes');

try {
    setupMongoConnection();
} catch (error) {
    console.log(`ERROR ${error}`);
}

app.use(express.json());
app.use(userRoute);
app.use(jokeRoute);

app.listen(port, ()=>{
    console.log(`server is running on port number : ${port}`);
})
