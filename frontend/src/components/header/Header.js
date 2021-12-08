import {AuthContext} from "../../context";
import MenuHeader from "../menuHeader/MenuHeader";
import MyButton from "../UI/myButton/MyButton";
import cl from "./Header.module.css";
import {useAuth} from "../../hooks/useAuth";
import {useContext} from "react";
import {useHistory} from "react-router";

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
                <MyButton onClick={isAuth ? logOut : login }>
                    {isAuth ? "LogOut" : "LOGIN"}
                </MyButton>
            </div>
            <div className={cl.menuHeader}>
                <MenuHeader/>
            </div>
        </div>
    );
}
