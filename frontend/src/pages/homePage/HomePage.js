import Header from "../../components/header/Header";
import HomeRouter from "../../routing/HomeRouter";
import cl from "./HomePage.module.css";

export default function HomePage () {
    const elem = document.getElementsByName("scrollAnim");

    if (elem.length > 0) {
        window.addEventListener("scroll", scrollAnimation);

        function scrollAnimation () {
            for (let i = 0; i < elem.length; i++) {
                const item = elem[i];
                const itemHeight = item.offsetHeight;
                const itemOffset = offset(item).top;
                const animStart = 4;
                const scrollWindowTop = document.documentElement.scrollTop || window.pageYOffset;

                let itemPoint = window.innerHeight - itemHeight / animStart;

                if (itemHeight > window.innerHeight) {
                    itemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((scrollWindowTop > itemOffset - itemPoint) && scrollWindowTop < (itemOffset + itemHeight)) {
                    item.classList.add(cl.active);
                } else {
                    item.classList.remove(cl.active);
                }

                if (scrollWindowTop === 0) {
                    item.classList.remove(cl.active);
                }
            }
        }

        function offset (el) {
            const rect = el.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
        }
    }

    return (
        <div className={cl.wrapper}>
            <header className={cl.header} name="scrollAnim">
                <Header/>
            </header>
            <main className={cl.main}>
                <HomeRouter/>
            </main>
            <footer className={cl.footer}>
                footer
            </footer>
        </div>
    );
};
