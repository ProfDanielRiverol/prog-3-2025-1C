import express from "express";
import { join, __dirname } from "./utils/index.js";
import imageRoutes from "./routes/images.route.js";
import sequelize from "./config/db-sequelize.js";
import envs from "./config/envs.js";
import cors from "cors";

//settings
const app = express();

app.set("PORT", envs.port || 3000);

const initializeConnection = async () => {
  try {
    await sequelize.sync();
    console.log("Database sincronizada");
  } catch (error) {
    console.error(error);
  }
};

// middlewares
app.use(
  cors({
    origin: "http://localhost:5500",
  })
);
app.use(express.json());
app.use(express.static(join(__dirname, ".." ,"public")));
app.use(express.urlencoded({ extended: true }));


//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

app.use("/api/images", imageRoutes);

//listeners
initializeConnection();
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
