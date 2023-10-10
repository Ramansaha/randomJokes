const mongoose = require('mongoose');

const setupMongoConnection = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost/project_db');
        console.log("DB connected ")
    } catch (error) {
        console.log("Error ",error);
        return error;
    }
}

module.exports =  setupMongoConnection;