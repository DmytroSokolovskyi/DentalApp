import {Redirect, Route, Switch} from "react-router-dom";
import ErrorPage2 from "../pages/errorPage/errorPage2/ErrorPage2";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";

export default function AppRouter () {
    return (
        <Switch>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/login"} component={LoginPage}/>
            <Route exact path={"/error"} component={ErrorPage2}/>
            <Redirect to={"/error"}/>
        </Switch>
    );
}
