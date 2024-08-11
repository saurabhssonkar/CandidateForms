import React from "react";

const PersonalInformation = ({ candidateInformation, handleChange, errors,required }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="font-semibold text-lg text-gray-700">
          First Name<span className="text-red-500">*</span>
        </label>
        <input
          name="firstName"
          value={candidateInformation.firstName}
          onChange={handleChange}
          type="text"
          placeholder="Enter your first name here.."
          className="mt-2 p-2 border border-gray-400 rounded-md "
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-lg text-gray-700">
          Last Name<span className="text-red-500">*</span>
        </label>
        <input
          name="lastName"
          value={candidateInformation.lastName}
          onChange={handleChange}
          type="text"
          placeholder="Enter your last name here.."
          className="mt-2 p-2 border border-gray-400 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-lg text-gray-700">
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          value={candidateInformation.email}
          onChange={handleChange}
          type="email"
          placeholder="ex: myname@example.com"
          className="mt-2 p-2 border border-gray-400 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-lg text-gray-700">
          Date of Birth<span className="text-red-500">*</span>
        </label>
        <input
          name="dateOfbirth"
          value={candidateInformation.dateOfbirth}
          onChange={handleChange}
          type="date"
          className="mt-2 p-2 border border-gray-400 rounded-md"
          required
        />
        {errors.dateOfbirth && (
          <span className="text-red-500 text-sm mt-2">{errors.dateOfbirth}</span>
        )}
        <label className="text-gray-500 mt-1 text-sm">(Min. age should be 18 Years)</label>
      </div>
    </div>
  );
};

export default PersonalInformation;
