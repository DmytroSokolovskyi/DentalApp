import {AuthContext} from "../../context";
import MenuHeader from "../menuHeader/MenuHeader";
import MyButton from "../UI/myButton/MyButton";
import cl from "./Header.module.css";
import {useAuth} from "../../hooks/useAuth";
import {useContext} from "react";
import {useHistory} from "react-router";
import MenuHeaderDoctor from "../menuHeaderDoctor/MenuHeaderDoctor";

export default function Header () {
    const history = useHistory();
    const {isAuth} = useContext(AuthContext);
    const {goLogOut} = useAuth();

    const login = () => {
        history.push("/login");
    };

    const logOut = () => {
        goLogOut();
    };

    return (
        <div className={cl.headerDiv}>
            <div className={cl.contentHeader}>
                <div className={cl.logoDiv}>LOGO</div>
                <div className={cl.contactDiv}>CONTACT</div>
                <div className={cl.buttonDiv}>
                    <MyButton onClick={isAuth ? logOut : login }>
                        {isAuth ? "LogOut" : "LOGIN"}
                    </MyButton>
                </div>
            </div>
            <div className={cl.menuHeader}>
                {isAuth ? <MenuHeaderDoctor/> : <MenuHeader/>}
            </div>
        </div>
    );
}
