import {Redirect, Route, Switch} from "react-router-dom";
import {AuthContext} from "../context";
import ErrorPage2 from "../pages/errorPage/errorPage2/ErrorPage2";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import MyLoader from "../components/UI/myLoader/MyLoader";
import {useAuth} from "../hooks";
import {useContext} from "react";

export default function AppRouter () {
    const {isAuth} = useContext(AuthContext);
    const {loading} = useAuth();

    if (loading) {
        return <MyLoader/>;
    }

    return (
        isAuth
            ? <Switch>
                <Route path={"/"} component={HomePage}/>
                <Route exact path={"/error"} component={ErrorPage2}/>
                <Redirect to={"/"}/>
            </Switch>
            : <Switch>
                <Route exact path={"/login"} component={LoginPage}/>
                <Route exact path={"/error"} component={ErrorPage2}/>
                <Redirect to={"/login"}/>
            </Switch>
    );
}
