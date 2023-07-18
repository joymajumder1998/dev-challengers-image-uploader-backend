const { upload } = require("./upload");

module.exports = (app) => {
  app.post("/upload", upload.single("image"), (req, res) => {
    try {
      const image = req.file;
      console.log(image);
      res.sendFile(image.path, { root: "." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });
};
