import './App.css';
import {authRoutes, publicRoutes} from "./routes/index"
import {useRoutes} from "react-router-dom";


const App = () => {
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
