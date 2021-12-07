import cl from "./MyButton.module.css";

export default function MyButton ({children, ...props}) {
    return (
        <button { ...props } className={ cl.myBtn }>
            { children }
        </button>
    );
}
