import cl from "./MyButtonHover.module.css";

export default function MyButtonHover ({item}) {
    // const btn = document.querySelector(".menuButtonDiv");
    const btn = document.getElementById("myButtonHoverDiv");

    console.log(btn);

    if (btn) {
        btn.addEventListener("mousemove", e => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty("--x", x + "px");
            btn.style.setProperty("--y", y + "px");
        });
    }

    return (
        <div className={cl.myButtonHoverDiv} id={"myButtonHoverDiv"}>
            <span> {item.name}</span>
        </div>
    );
}
