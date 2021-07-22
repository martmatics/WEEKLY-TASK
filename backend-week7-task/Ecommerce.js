const express = require("express");
const app = express();

// configure dotenv for environment variable
const dotenv = require("dotenv").config();
const PORT = 8070;

// Body Parser 
app.use(express.json());
const cookieParser = require("cookie-parser");

// Import Routes
const ProductRoute = require("./mart/route/Product");
const UserRoute = require("./mart/route/User");
const AdminRoute = require("./mart/route/admin");

// Mounting
app.use("/mart/products", ProductRoute);
app.use("/mart/users", UserRoute);

// Set Token Verification 
const verify = require("./mart/middleware/Token"); 
app.use(cookieParser()); 
app.use("/try/products", verify, ProductRoute); 
app.use("/try/users/admin", verify, AdminRoute); 

app.listen(PORT, () => {
    console.log(`server started on port http://127.0.0.1:${PORT}`);
})