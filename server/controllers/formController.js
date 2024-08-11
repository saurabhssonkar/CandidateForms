const FormData = require('../models/FormData');
const FileUpload = require('../models/FileUpload');
const { processFileUpload } = require('../middleware/fileUpload');

const submitForm = async (req, res) => {
    try {
        const { firstName, lastName, email, dateOfbirth, street1, street2, street3, street4, sameAsResidential, fileUploads } = req.body;

        const fileDocs = [];

        for (const file of fileUploads) {
            const filePath = await processFileUpload(file);

            const fileDoc = await FileUpload.create({
                fileName: file.fileName,
                fileType: file.fileType,
                physicalUrl: filePath
            });

            fileDocs.push(fileDoc);
        }

        const formData = await FormData.create({
            firstName,
            lastName,
            email,
            dateOfbirth,
            street1,
            street2,
            street3,
            street4,
            sameAsResidential,
            fileUploads: fileDocs.map(doc => doc._id)
        });

        res.status(200).json({ message: 'Form submitted successfully', formData });
    } catch (error) {
        console.error("Error details:", error);
        res.status(500).json({ message: 'Error submitting form', error });
    }
};

module.exports = { submitForm };
