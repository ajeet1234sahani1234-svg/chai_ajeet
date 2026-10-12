// link to the database
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})



connectDB()
    // link to the server
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port: ${process.env.PORT}`);
        })


    })
    .catch((error) => {
        console.log("mongodb connection fail !!!", error);

    })