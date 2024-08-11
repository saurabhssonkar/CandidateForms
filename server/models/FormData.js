const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    dateOfbirth: Date,
    street1: String,
    street2: String,
    street3: String,
    street4: String,
    sameAsResidential: Boolean,
    fileUploads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FileUpload' }]
});

module.exports = mongoose.model('FormData', formDataSchema);
