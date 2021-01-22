const express = require('express');
const multer = require('multer');
const cors = require('cors');
// var compression = require('compression');
// var helmet = require('helmet');
const app = express();
app.use(cors());
// app.use(compression());
// app.use(helmet());

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["text/json"];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Incorrect file");
        error.code = "INCORRECT_FILETYPE";
        return cb(error, false)
    }
    cb(null, true)
}

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
     },
    filename: function (req, file, cb) {
        cb(null ,Date.now() + file.originalname);
    }
});
const upload = multer({
    dest: './uploads',
    storage: storage,
    // fileFilter,
    // limits: {
    //     fileSize: 500000
    // }
});

const PORT = '5000' || process.env.PORT;



app.post('/uploads', upload.single('file'), async (req, res) => {
    res.json({ file: req.file});
    // const fileName = name + file.detectedFileExtension;
    // await pipeline(file.stream, fs.createWriteStream(`${__dirname}/../quiz/data/${fileName}`));
    console.log(req.file.filename);
    // res.send("File uploaded as " + fileName);
});


app.use((err, req, res, next) => {
    if (err.code === "INCORRECT_FILETYPE") {
        res.status(422).json(({ error: "Only json files are allowed" }));
        return;
    }
    if (err.code === "LIMIT_FILE_SIZE") {
        res.status(422).json(({ error: "Allowed file size is 500KB" }));
        return;
    }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
