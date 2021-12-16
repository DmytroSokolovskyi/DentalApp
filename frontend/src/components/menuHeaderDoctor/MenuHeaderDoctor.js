import MenuButton from "../menuButton/MenuButton";

export default function MenuHeaderDoctor () {
    const menuDoctor = [
        {name: "Вiзити", path: "/visits"},
        {name: "Пацiєнти", path: "/clients"},
        {name: "Зуби", path: "/teethes"},
        {name: "Сповiщення", path: "/notifications"},
    ];

    return (
        <>
            {

                menuDoctor.map(item => <MenuButton item={item} key={item.path}/>)
            }
        </>
    );
}
