import express from "express";
import UserRouter from "./routes/User.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/users", UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
