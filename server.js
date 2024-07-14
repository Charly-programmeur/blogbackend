import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import blogPosts from "./routes/blogPosts.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

// Routes
app.use("/api/blogs", blogPosts);

app.use((res,req)=>{
  res.send("API is running...")
})  


const DB_CONNECTION = process.env.DATABASE_URL;
const PORT = process.env.PORT || 6000;

mongoose
  .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running at: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`Error connecting to the database: ${error.message}`));