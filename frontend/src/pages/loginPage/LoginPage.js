import MyButton from "../../components/UI/myButton/MyButton";
import MyInput from "../../components/UI/myInput/MyInput";
import MyLoader from "../../components/UI/myLoader/MyLoader";
import cl from "./LoginPage.module.css";
import {useAuth} from "../../hooks/useAuth";
import {useFormValid} from "../../hooks/useFormValid";
import {useInput} from "../../hooks";

export default function LoginPage () {
    const email = useInput("", {isEmpty: true, isEmail: true});
    const password = useInput("", {isEmpty: true, isPassword: true});
    const validForm = useFormValid(email, password);
    const {loading, goLogin} = useAuth();

    const clickLogin = (e) => {
        e.preventDefault();
        const mailPass = {
            email: email.value,
            password: password.value,
        };
        goLogin(mailPass);
    };

    if (loading) {
        return <MyLoader/>;
    }

    return (
        <div className={cl.loginPageDiv}>
            <h2>Вхiд в кабiнет</h2>
            <form >
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
            </form>
            <MyButton
                style={{width: "150px", fontSize: "16px"}}
                type="submit"
                onClick={clickLogin}
                disabled={validForm}
            > Вхiд </MyButton>
        </div>
    );
}
