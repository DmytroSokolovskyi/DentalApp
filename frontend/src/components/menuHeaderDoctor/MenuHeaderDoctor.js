import MenuButton from "../menuButton/MenuButton";
import cl from "./MenuHeaderDoctor.module.css";

export default function MenuHeaderDoctor () {
    const menuDoctor = [
        {name: "Вiзити", path: "/visits"},
        {name: "Клiенти", path: "/clients"},
        {name: "Зуби", path: "/teethes"},
        {name: "Сповiщення", path: "/notifications"},
    ];

    return (
        <div className={cl.menuHeaderDoctorDiv}>
            {
                menuDoctor.map(item => <MenuButton item={item} key={item.path}/>)
            }
        </div>
    );
}
