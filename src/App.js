import './App.css';
import Button from 'react-bootstrap/Button';
import Navbarapp from "./components/Navbar";
import Buttonsgroup from "./components/Buttonsgroup";
import Dbody from "./components/Dbody";
import {authRoutes} from "./routes/index"



function App() {
    return (
        <div >
            <Navbarapp/>
            <Buttonsgroup/>
            <Dbody authRoutes={authRoutes}/>
        </div>
    );
}

export default App;
