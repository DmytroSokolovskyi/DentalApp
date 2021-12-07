import MyButton from "../../components/UI/myButton/MyButton";
import MyInput from "../../components/UI/myInput/MyInput";
import cl from "./LoginPage.module.css";
import {useFormValid} from "../../hooks/useFormValid";
import {useInput} from "../../hooks";

export default function LoginPage () {
    const email = useInput("", {isEmpty: true, isEmail: true});
    const password = useInput("", {isEmpty: true, isPassword: true});

    const validForm = useFormValid(email, password);

    console.log(validForm);

    const clickLogin = () => {
        const logPass = {
            email: email.value,
            password: password.value,
        };
        console.log(logPass);
    };

    return (
        <div className={cl.loginPageDiv}>
            <form >
                <h2>Вхiд в кабiнет</h2>
                <MyInput
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => email.onChange(e)}
                    onBlur={(e) => email.onBlur(e)}
                    error={email.isDirty ? email.errorMessage : ""}
                />
                <MyInput
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => password.onChange(e)}
                    onBlur={(e) => email.onBlur(e)}
                    error={password.isDirty ? password.errorMessage : ""}
                />
                <MyButton
                    style={{width: "150px", fontSize: "16px"}}
                    type="submit"
                    onClick={clickLogin}
                    disabled={validForm}
                > Вхiд </MyButton>
            </form>
        </div>
    );
}
