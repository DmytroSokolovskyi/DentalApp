import cl from "./MySpanHover.module.css";

export default function MySpanHover ({children}) {
    return (
        <p className={cl.mySpanHoverDiv}>{children}</p>
    );
}
