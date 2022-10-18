const multer = require('multer') ;
const DatauriParser = require("datauri/parser");
const path = require('path')
const storage = multer.memoryStorage();
const multerUploads = multer({ storage });

const parser = new DatauriParser();


const dataUri = req => parser.format(
    path.extname(req.file.originalname).toString(),
    req.file.buffer
    ).content;;


module.exports = {multerUploads,dataUri} ;