import express from "express";
import router from "./router";
import cors from "cors";

const app = express();

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(
	cors({
		origin: process.env.CORS_ORIGIN || "http://localhost:3000",
	})
);

// Base URL for the API
app.use("/api", router);

export default app;
