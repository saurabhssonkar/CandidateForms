import React from "react";
import AddressInput from "./components/AddressInput";
import FileUpload from "./components/FileUpload";
import PersonalInformation from "./components/PersonalInformation";
import useFormLogic from "./customHooks/useFormLogic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {
    const {
        addressSame,
        fileUploads,
        candidateInformation,
        errors,
        fileErrors,
        handleFileUpload,
        handleChange,
        handleAddFileUpload,
        handleRemoveFileUpload,
        submit,
    } = useFormLogic();

    

    return (
        <><form onSubmit={submit} className="max-w-3xl mx-auto p-6 py-10 rounded-lg space-y-6">
            <PersonalInformation
                candidateInformation={candidateInformation}
                handleChange={handleChange}
                errors={errors}
                required />

            <AddressInput
                label="Residential Address"
                name1="street1"
                name2="street2"
                value1={candidateInformation.street1}
                value2={candidateInformation.street2}
                handleChange={handleChange}
                required={true} />

            <div className="flex items-center space-x-3">
                <input
                    type="checkbox"
                    name="SameasResidential"
                    checked={addressSame}
                    onChange={handleChange}
                    className="h-4 w-4 text-black border-gray-400 rounded" />
                <label className="font-semibold text-lg text-gray-700">Same as Residential Address</label>
            </div>

            <AddressInput
                label="Permanent Address"
                name1="street3"
                name2="street4"
                value1={candidateInformation.street3}
                value2={candidateInformation.street4}
                handleChange={handleChange}
                required={!addressSame} />
                <div className="mt-4">
      <label className="font-semibold text-lg text-gray-700">Upload Documents</label>
    </div>

            {fileUploads.map((upload, index) => (
                <FileUpload
                  
                    key={index}
                    upload={upload}
                    index={index}
                    handleFileUpload={handleFileUpload}
                    handleAddFileUpload={handleAddFileUpload}
                    handleRemoveFileUpload={handleRemoveFileUpload}
                    fileErrors={fileErrors}
                    required />
            ))}

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="py-4 px-20 bg-gray-800 text-white text-xl rounded hover:bg-gray-700"
                >
                    Submit
                </button>
            </div>
        </form>
        <ToastContainer />
        </>


    );
};

export default Form;
