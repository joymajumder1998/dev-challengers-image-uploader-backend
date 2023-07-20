const { upload } = require("./upload");
const fs = require("fs");

module.exports = (app) => {
  app.post("/upload", upload.single("image"), (req, res) => {
    try {
      const image = req.file;
      // console.log(image);
      res.status(200).json({ message: "File uploaded successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/files", (req, res) => {
    try {
      let files = fs.readdirSync("uploads/");
      res.status(200).json({ data: files });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });

  app.get("/image", (req, res) => {
    try {
      const { PATH } = req.query;
      res.sendFile("uploads/" + PATH, { root: "." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });

  app.post("/delete", (req, res) => {
    try {
      const { PATH } = req.query;
      fs.unlinkSync("uploads/" + PATH);
      res.status(200).json({ message: "File deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });
};
