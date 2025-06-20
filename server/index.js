const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB=require("./src/config/db")
connectDB();



const app=express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

const circleRoutes=require('./src/routes/circleRoutes')
app.use('/api/circles', circleRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
