const mongoose = require('mongoose');

const fileUploadSchema = new mongoose.Schema({
    fileName: String,
    fileType: String,
    physicalUrl: String 
});

module.exports = mongoose.model('FileUpload', fileUploadSchema);
