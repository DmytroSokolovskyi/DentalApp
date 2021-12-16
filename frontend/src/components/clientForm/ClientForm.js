import MyButton from "../UI/myButton/MyButton";
import MyInput from "../UI/myInput/MyInput";
import cl from "./ClientForm.module.scss";
import {useEffect} from "react";
import {useFormValid} from "../../hooks/useFormValid";
import {useInput} from "../../hooks";

export default function ClientForm ({clickCreate, clickUpdate, chosenClient}) {
    const name = useInput("", {isEmpty: true, minLength: 3, maxLength: 30});
    const surname = useInput("", {isEmpty: true, minLength: 5, maxLength: 30});
    const phone = useInput("", {isEmpty: true, isPhone: true});
    const email = useInput("", {isEmpty: true, isEmail: true});

    const validForm = useFormValid(name, surname, phone, email);

    useEffect(() => {
        name.setValue(chosenClient.name);
        surname.setValue(chosenClient.surname);
        // phone.setValue(chosenClient.phone);
        // email.setValue(chosenClient.email);
    }, [chosenClient]);

    const setClient = (e) => {
        const newClient = {
            name: name.value,
            surname: surname.value,
            phone: phone.value,
            email: email.value,
        };

        chosenClient.name ? clickUpdate(chosenClient._id, newClient) : clickCreate(newClient);
    };

    const editClient = (e) => {
        const addClient = {
            name: name.value,
            surname: surname.value,
        };
        clickUpdate(chosenClient._id, addClient);
    };

    return (
        <div className={cl.clientFormDiv}>
            <div className={cl.clientFormContainer}>
                <div className={cl.titleClientForm}>
                    {chosenClient.name ? "Редагувати пацiєнта" : "Створити нового пацiєнта"}
                </div>
                <div className={cl.bodyClientForm}>
                    <form >
                        <MyInput
                            type="name"
                            value={name.value}
                            placeholder="Iм'я"
                            onChange={(e) => name.onChange(e)}
                            onBlur={(e) => name.onBlur(e)}
                            error={name.isDirty ? name.errorMessage : ""}
                        />
                        <MyInput
                            type="surname"
                            value={surname.value}
                            placeholder="Фамiлiя"
                            onChange={(e) => surname.onChange(e)}
                            onBlur={(e) => surname.onBlur(e)}
                            error={surname.isDirty ? surname.errorMessage : ""}
                        />
                        <MyInput
                            type="phone"
                            value={phone.value}
                            placeholder="050 50 50 500"
                            onChange={(e) => phone.onChange(e)}
                            onBlur={(e) => email.onBlur(e)}
                            error={phone.isDirty ? phone.errorMessage : ""}
                            disabled={chosenClient.name}
                        />
                        <MyInput
                            type="email"
                            value={email.value}
                            placeholder="Email"
                            onChange={(e) => email.onChange(e)}
                            onBlur={(e) => email.onBlur(e)}
                            error={email.isDirty ? email.errorMessage : ""}
                            disabled={chosenClient.name}
                        />
                    </form>

                </div>
                <div className={cl.buttonClientForm}>
                    <MyButton
                        style={{width: "150px", fontSize: "16px"}}
                        type="submit"
                        onClick={chosenClient.name ? editClient : setClient}
                        disabled={chosenClient.name ? false : validForm}
                    >
                        {chosenClient.name ? "Редагувати" : "Створити"}
                    </MyButton>
                </div>
            </div>
        </div>
    );
}
