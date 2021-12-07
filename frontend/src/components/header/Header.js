import MenuHeader from "../menuHeader/MenuHeader";
import MyButton from "../UI/myButton/MyButton";
import cl from "./Header.module.css";
import {useHistory} from "react-router";

export default function Header () {
    const history = useHistory();
    return (
        <div className={cl.headerDiv}>
            <div className={cl.contentHeader}>
                <MyButton onClick={() => history.push("/login")}>
                    LOGIN
                </MyButton>
            </div>
            <div className={cl.menuHeader}>
                <MenuHeader/>
            </div>
        </div>
    );
}
