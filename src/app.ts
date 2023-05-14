import express, { Application } from "express";
import cors from "cors";

// Application Routes
import userRoutes from "./app/modles/user/user.route";

const app: Application = express();

//Using Cors
app.use(cors());
//Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoutes);
app.use("/api/v1/user", userRoutes)

export default app;

/* Breakdown
interface--> URLSearchParams.interface.ts
Scema, Model --> user.model.ts
Route --> user.route.ts
Route FUnction > user.controller.ts
DB Query > user.service.ts
*/