import {Redirect, Route, Switch} from "react-router-dom";
import Clients from "../components/clients/Clients";
import Notifications from "../components/notifications/Notifications";
import Teethes from "../components/teethes/Teethes";
import Visits from "../components/visits/Visits";

export default function HomeRouter () {
    return (
        <Switch>
            <Route exact={true} path={"/visits/:id"} render={(props) => {
                const client = props.location.state.client;
                return <Visits client={client}/>;
            }}/>
            <Route exact={true} path={"/visits"} component={Visits}/>
            <Route exact={true} path={"/clients"} component={Clients}/>
            <Route exact={true} path={"/teethes"} component={Teethes}/>
            <Route exact={true} path={"/notifications"} component={Notifications}/>
            <Redirect to={"/clients"}/>
        </Switch>
    );
}
