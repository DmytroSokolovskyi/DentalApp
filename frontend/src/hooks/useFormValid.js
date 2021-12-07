import {useEffect, useState} from "react";

export const useFormValid = (...inputs) => {
    const [validForm, setValidForm] = useState(false);

    // console.log(validForm);

    useEffect(() => {
        inputs.forEach(input => {
            if (input.errorMessage && validForm) {
                setValidForm(false);
            }
        });
    }, [...inputs]);

    return {validForm};
};
