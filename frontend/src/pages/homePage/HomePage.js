import Header from "../../components/header/Header";
import HomeRouter from "../../routing/HomeRouter";
import cl from "./HomePage.module.css";

export default function HomePage () {
    const elem = document.getElementsByTagName("header");
    const onScrollMainDiv = (e) => {
        if (e.target.scrollTop === elem[0].offsetTop) {
            elem[0].style.minHeight = "8vh";
        } else {
            elem[0].style.minHeight = "15vh";
        }
    };
    return (
        <div className={cl.mainDivPage}>
            <main onScroll={onScrollMainDiv}>
                <header>
                    <Header/>
                </header>
                <contentSide>
                    <HomeRouter/>
                </contentSide>
                <footer>
                    footer
                </footer>
            </main>
        </div>
    );
};
