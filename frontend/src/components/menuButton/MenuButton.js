import MySpanHover from "../UI/spanHover/MySpanHover";
import cl from "./MenuButton.module.css";
import {useHistory} from "react-router";

export default function MenuButton ({item}) {
    const history = useHistory();

    return (
        <div className={cl.menuButtonDiv} onClick={() => history.push(item.path)}>
            <MySpanHover>{item.name}</MySpanHover>
        </div>
    );
}
