import cors from "cors";
import express from "express";
import dotenv from "dotenv";

// Routes
import healthCheckRouter from "./routes/healthcheck.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();

// CORS config
const corsOptions = {
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middlewares
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("public"));
app.use(cors(corsOptions));

app.use("/api/v1/healthcheck", healthCheckRouter);

export default app;
