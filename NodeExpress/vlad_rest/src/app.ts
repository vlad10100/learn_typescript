import express from "express";
import bodyparser from "body-parser";
import winston from "winston";
import expressWinston from "express-winston";
import cors from "cors";
import { categoryRoute } from "./routes/category";
import { authGuard } from "./middlewares/authGuard";

const app: express.Application = express();
const port = 8888;

app.use(bodyparser.json());
app.use(cors());

// app.use(
//   expressWinston.logger({
//     transports: [new winston.transports.Console()],
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.json({ space: 2 })
//     ),
//   })
// );
app.use(authGuard);
app.use("/category", categoryRoute);

app.listen(port, () => {
  console.log("Server is running at port 8888");
});

export default app;
