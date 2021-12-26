import {AuthContext} from "../../context";
import MenuHeader from "../menuHeader/MenuHeader";
import MenuHeaderDoctor from "../menuHeaderDoctor/MenuHeaderDoctor";
import MyButton from "../UI/myButton/MyButton";
import cl from "./Header.module.scss";
import logo from "../../assets/img/Nestordental.png";
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
            <img className={cl.logoImg} src={logo} alt="logo"/>
            <div className={cl.container}>
                <div className={cl.rowHeader}>
                    <div>067-86-26-939</div>
                    <div>067-86-26-939</div>
                </div>
                <div className={cl.buttonDiv}>
                    <MyButton onClick={isAuth ? logOut : login }>
                        {isAuth ? "LogOut" : "LOGIN"}
                    </MyButton>
                </div>
                <div className={cl.nawHeader}>
                    {isAuth ? <MenuHeaderDoctor/> : <MenuHeader/>}
                </div>
            </div>
        </div>
    );
}
