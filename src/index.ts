import express =  require("express");
import cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3333);
