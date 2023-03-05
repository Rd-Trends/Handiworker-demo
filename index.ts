import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import productRoute from "./routes/products";
import cartRoute from "./routes/cart";

dotenv.config();

const app: Express = express();

// mongodb
const mongoDB_URI = process.env.MONGODB_URI!;
const connectionOptions = {};

mongoose
  .connect(mongoDB_URI, connectionOptions)
  .then(() => console.log("db connected succesfully"));

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);

// app.get("/", (req: Request, res: Response) => {
//   res.send("hello world typescript");
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is started on port: ${port}`));
