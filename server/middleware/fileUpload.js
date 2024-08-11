const fs = require('fs');
const path = require('path');

const uploadDir = path.join('uploads');
const imageDir = path.join(uploadDir, 'images');
const pdfDir = path.join(uploadDir, 'pdfs');

fs.existsSync(uploadDir) || fs.mkdirSync(uploadDir);
fs.existsSync(imageDir) || fs.mkdirSync(imageDir);
fs.existsSync(pdfDir) || fs.mkdirSync(pdfDir);

const processFileUpload = async (file) => {
    const { fileName, fileType, uploadfile } = file;

    let folder = fileType === 'image' ? imageDir : pdfDir;
    let fileExtension = fileType === 'image' ? '.png' : '.pdf'; 
    let filePath = path.join(folder, `${Date.now()}-${fileName}${fileExtension}`);

    const base64Data = uploadfile.replace(/^data:([A-Za-z-+/]+);base64,/, '');
    fs.writeFileSync(filePath, base64Data, 'base64');

    return filePath;
};

module.exports = { processFileUpload };
