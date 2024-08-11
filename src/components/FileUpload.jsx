import React from "react";

const FileUpload = ({ upload, index,  handleFileUpload, handleAddFileUpload, handleRemoveFileUpload, fileErrors ,label }) => {
  return (
    <><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="font-medium text-gray-400">
            File Name<span className="text-red-500">*</span>
          </label>
          <input
            name="fileName"
            value={upload.fileName}
            onChange={event => handleFileUpload(event, index)}
            type="text"
            className="mt-2 p-2 border border-gray-300 rounded-md w-10/12"
            required />
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-400">
            Type of File<span className="text-red-500">*</span>
          </label>
          <select
            onChange={event => handleFileUpload(event, index)}
            className="mt-2 p-2 border border-gray-300 rounded-md  w-10/12"
            name="fileType"
            value={upload.fileType}
            required
          >
            <option value=""></option>
            <option value="image">Image</option>
            <option value="pdf">Pdf</option>
          </select>
          <label className="text-gray-500 p-1 text-sm">(image, pdf.)</label>
        </div>

        <div className="flex flex-col">
          <label className="font-medium text-gray-400">
            Upload Document<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center mt-2">
            <input
              type="file"
              name="uploadfile"
              onChange={event => handleFileUpload(event, index)}
              className="flex-1 p-2 border border-gray-300 rounded-md  w-10/12"
              required />
       

            {index === 0 ? (
              <button
                onClick={handleAddFileUpload}
                className="ml-5 bg-gray-800 text-white py-2 px-3 text-2xl font-bold rounded-md"
              >
                +
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleRemoveFileUpload(index)}
                className="ml-5 bg-gray-200 py-2 px-3 text-3xl font-bold text-black rounded"
              >
                🗑
              </button>
            )}
          </div>

          {/* {filerrors && (
      <label className="text-red-500 text-sm mt-1">{filerrors}</label>
    )} */}
          {fileErrors[index] && (
            <label className="text-red-500 text-sm mt-1">{fileErrors[index]}</label>
          )}
        </div>
      </div></>
  );
};

export default FileUpload;
