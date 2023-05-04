const mongoose = require('mongoose');
require('dotenv').config();
// Connect to the database
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected!!');
    }catch(err){
        console.log(`Ohh...error occured, ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;