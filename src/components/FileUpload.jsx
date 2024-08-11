import React from "react";

const FileUpload = ({ upload, index,  handleFileUpload, addMoreFileUpload, handleRemoveFileUpload, fileErrors ,label }) => {
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
                onClick={addMoreFileUpload}
                className="ml-5 bg-gray-800 text-white py-2 px-3 text-2xl font-bold rounded-md"
              >
                +
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleRemoveFileUpload(index)}
                className="ml-5 bg-gray-200 py-3 px-2 border border-gray-300 text-3xl font-bold text-black rounded"
              >
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 482.428 482.429" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098 c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117 h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828 C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879 C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096 c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266 c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979 V115.744z"></path> <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"></path> <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"></path> <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07 c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"></path> </g> </g> </g></svg>
              
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
