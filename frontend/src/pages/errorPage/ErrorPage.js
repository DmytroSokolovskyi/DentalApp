import cl from "./ErrorPage.module.css";

export default function ErrorPage () {
    return <div className={cl.errorDiv}>
        <h1 className={cl.errorH1}>
            404
        </h1>
        <p className={cl.errorP}>
            Oops! Something is wrong.
        </p>
    </div>;
}
