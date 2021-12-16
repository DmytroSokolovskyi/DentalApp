import cl from "./MenuButton.module.css";
import {useHistory} from "react-router";

export default function MenuButton ({item}) {
    const history = useHistory();

    return (
        <div className={cl.menuButtonDiv} onClick={() => history.push(item.path)}>
            <div className={cl.buttonBorder}>
                <div className={cl.buttonImg}>
                </div>
                <span>{item.name}</span>
                <div className={cl.buttonImg}>
                </div>
            </div>
        </div>
    );
}
