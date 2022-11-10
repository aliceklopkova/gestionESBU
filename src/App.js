import './App.css';
import Button from 'react-bootstrap/Button';
import Navbarapp from "./components/Navbar";
import Buttonsgroup from "./components/Buttonsgroup";
import Dbody from "./components/Dbody";
import {authRoutes, publicRoutes} from "./routes/index"
import {useRoutes} from "react-router-dom";
import Dashboard from "./components/Dashboard";


function App() {
    const routes = useRoutes([
        ...authRoutes,
        ...publicRoutes
    ])
    return (
        <div>
            {routes}
        </div>
    );
}

export default App;
