import { useState } from "react";
import { toast } from 'react-toastify';
import API_BASE_URL from "../config/config";


const useFormLogic = () => {
    const [addressSame, setAddressSame] = useState(false);
    const [fileUploads, setFileUploads] = useState([
        { fileName: '', fileType: '', uploadfile: '' },
        { fileName: '', fileType: '', uploadfile: '' }
    ]);
    const [candidateInformation, setCandidateInformation] = useState({
        firstName: '', lastName: '', email: '', dateOfbirth: '', street1: '', street2: '', street3: '', street4: '', SameasResidential: ''
    });
    const [errors, setErrors] = useState({});
    const [fileErrors, setFileErrors] = useState([]);


    const handleFileUpload = (event, index) => {
        let data = [...fileUploads];
        const { name, value, files } = event.target;
        if (name === "uploadfile") {
            const file = files[0];
            const isPdf = file.type === "application/pdf";
            const isImage = file.type.startsWith("image/");
            console.log

            if (data[index].fileType === "pdf" && isPdf) {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    data[index][event.target.name] = reader.result;
                };
                setFileErrors((prevErrors) => {
                    const newErrors = [...prevErrors];
                    newErrors[index] = "";
                    return newErrors;
                });
            } else if (data[index].fileType === "image" && isImage) {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    data[index][event.target.name] = reader.result;
                };
                setFileErrors((prevErrors) => {
                    const newErrors = [...prevErrors];
                    newErrors[index] = "";
                    return newErrors;
                });
            }
            else if(data[index].fileType==""){
                setFileErrors((prevErrors) => {
                    const newErrors = [...prevErrors];
                    newErrors[index] = "Please select file type"; 
                    return newErrors;
                });
            }
            else {
                setFileErrors((prevErrors) => {
                    const newErrors = [...prevErrors];
                    newErrors[index] = "Upload a valid file type"; // Set the error for the current index
                    return newErrors;
                });

            }
        } else {
            data[index][name] = value;
        }

        setFileUploads(data);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setAddressSame(checked);
            if (checked) {
                setCandidateInformation((prevState) => ({
                    ...prevState,
                    street3: "",
                    street4: "",
                    SameasResidential: checked,
                }));
            }
        } else {
            setCandidateInformation((prevState) => ({
                ...prevState,
                [name]: value,
                SameasResidential: checked,
            }));
        }

        if (e.target.name === 'dateOfbirth') {
            validateAge(e.target.value);
        }
    };

    const validateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 18) {
            setErrors({
                ...errors,
                dateOfbirth: 'You must be at least 18 years old.',
            });
        } else {
            const { dateOfbirth, ...restErrors } = errors;
            setErrors(restErrors);
        }
    };

    const addMoreFileUpload = () => {
        let newfield = { fileName: '', fileType: '', uploadfile: '' };
        setFileUploads([...fileUploads, newfield]);
    };

    const handleRemoveFileUpload = (index) => {
        let data = [...fileUploads];
        data.splice(index, 1);
        setFileUploads(data);
    };

    const submit = async (e) => {
        e.preventDefault();
        const combinedData = {
            ...candidateInformation,
            fileUploads,
        };
        if (Object.values(errors).some(error => error !== null)) {

            toast.error('Please fix the min age should be 18 Years before submitting the form.');

            return;
        }
        if (fileErrors.some(error => error !== "")) {

            toast.error('Please fix the file upload errors before submitting the form.');
            return;
        }
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const response = await fetch(`${API_BASE_URL}/api/candidate-form`, {
                method: "POST",
                body: JSON.stringify(combinedData),
                headers: myHeaders,
            });
            if (response.ok) {
                console.log("respons", response)
                toast.success(
                    <div className=''>
                        <p>Form submitted successfully</p>
                        <hr />
                    </div>,

                );


            }


        }
        catch (error) {
            toast.error('Internal server error');

            console.error('API ERROR', error);

        }


    };

    return {
        addressSame,
        fileUploads,
        candidateInformation,
        errors,
        fileErrors,
        handleFileUpload,
        handleInputChange,
        addMoreFileUpload,
        handleRemoveFileUpload,
        submit,
    };
};

export default useFormLogic;
