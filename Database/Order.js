
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    storeID:{
        
        type: Number,
        required: true,
    
    },
    salesPersonID:{

        type: Number,
        required: true,
        
    },
    CdID:{

        type: Number,
        required: true,
        
    },
    pricePaidID:{

type: Number,
required: true,
min: 5,
max: 15,
    },
    HourPurch:{
        type: Number,
        required: true,
        min: 0,
        max: 23,
    },
    DayPurch:{
        type: Number,
        required: true,
        min: 0,
        max: 365,
    }
    
});

module.exports = mongoose.model("Order", OrderSchema);
