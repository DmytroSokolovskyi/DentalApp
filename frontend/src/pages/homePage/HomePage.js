import Header from "../../components/header/Header";
import cl from "./HomePage.module.css";
import {Route, Switch} from "react-router-dom";
import DoctorPage from "../doctorPage/DoctorPage";

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
                    <DoctorPage/>
                    {/* <Switch> */}
                    {/*    <Route exact={true} path={"/create"} component={FormCreate}/> */}
                    {/*    <Route exact={true} path={"/edit/:id"} component={FormCreate}/> */}
                    {/* </Switch> */}
                </contentSide>
                <footer>
                    footer
                </footer>
            </main>
        </div>
    );
};
