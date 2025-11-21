// Application-level configurations object
require("dotenv").config();

const configurations = {
    ConnectionStrings: {
        MongoDB: process.env.CONNECTION_STRING_MONGODB
    }
    
}


//export the configuration object
module.exports = configurations;