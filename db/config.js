const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: "Test"
        });
        console.log("Database Connected.");
    } catch (error) {
        console.error('Error Encountered', error.message);
        process.exit(1);
    }
}
 
module.exports = connectDB;
