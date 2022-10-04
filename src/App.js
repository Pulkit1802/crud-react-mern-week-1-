import {Crud} from "./components/main";
import {Switch, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import UpdateUser from "./components/update"

import './App.css';
import "react-toastify/dist/ReactToastify.css"


function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Switch>
                <Route exact path={"/"} component={Crud}/>
                <Route exact path={"/update/:id"} component={UpdateUser}/>
            </Switch>
        </div>
    );
}

export default App;
