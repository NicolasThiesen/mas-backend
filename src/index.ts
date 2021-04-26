import express =  require("express");
import cors = require("cors");
import routes from "./routes";
import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
