const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/files", express.static("files"));

const fileUpload = require("express-fileupload");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const multer = require("multer");
//---------------------------------------------------------------------------MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-files", upload.single("files"), async (req, res) => {
  console.log(req.file);
});
//---------------------------------------------------------------------------

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});
