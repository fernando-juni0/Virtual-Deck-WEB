require('dotenv').config()
module.exports = {
    session:{
        secret: process.env.SECRET || "224141244142240912y40yh0dh209dg10dg012db120dh12",
        resave: false, 
        saveUninitialized: false,
    },
    port: process.env.PORT || 4000,
    serviceAccount: require('../config/virtual-deck-7c7a9-firebase-adminsdk-os707-6eed9aa8ba.json'),
}