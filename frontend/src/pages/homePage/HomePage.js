import Header from "../../components/header/Header";
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
                <content>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                    <div>dddd</div>
                </content>

                {/* <usersSide> */}
                {/*    <UserSide/> */}
                {/* </usersSide> */}

                {/* <Switch> */}
                {/*    <Route exact={true} path={"/create"} component={FormCreate}/> */}
                {/*    <Route exact={true} path={"/edit/:id"} component={FormCreate}/> */}
                {/* </Switch> */}
                <footer>
                    footer
                </footer>
            </main>
        </div>
    );
};
