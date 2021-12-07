import {BrowserRouter, BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./routing/AppRouter";

function App () {
    return (
        <BrowserRouter>
            <Router>
                <AppRouter/>
            </Router>
        </BrowserRouter>
    );
}

export default App;
