const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://harini:chikky1203@cluster0.ith5f1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database Connected");
        sslValidate: false
    }catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
