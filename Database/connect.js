const mongoose = require("mongoose");
const dbURI = 
"mongodb+srv://xxxxxx:xxxxxxxxx@btfirstcluster.q5kdr.mongodb.net/Order?retryWrites=true&w=majority";

const options = {
    poolSize = 10,

    useNewUrlParser: true,
    useUnifiedTopology: true,
};


mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!")
    },
    (err) => {
        console.error("Error connecting Database instance due to:", err);
    }
);