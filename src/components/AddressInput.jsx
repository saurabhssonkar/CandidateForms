import React from "react";

const AddressInput = ({ label, name1, name2, value1, value2, handleChange, required }) => {
  return (
    <>
      <div className="">
        <label className="font-semibold text-lg text-gray-700">{label}</label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-medium text-gray-400">
            Street 1{required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            name={name1}
            value={value1}
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-400 rounded-md"
            required={required}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-400">
            Street 2{required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            name={name2}
            value={value2}
            onChange={handleChange}
            className="mt-2 p-2 border border-gray-400 rounded-md"
            required={required}
          />
        </div>
      </div>
    </>
  );
};

export default AddressInput;
