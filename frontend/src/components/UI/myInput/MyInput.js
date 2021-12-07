import cl from "./MyInput.module.css";

export default function MyInput ({children, ...props}) {
    return (
        <label className={cl.myInputLabel}>
            <span>{children}</span>
            <input {...props} className={cl.myInput}/>
            <span className={cl.myInputSpan}>{props.error}</span>
        </label>
    );
}
