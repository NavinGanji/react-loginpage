import logo from './logo.svg';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './main.css';
import Container from "./Components/Container"
import Compo3 from "./Components/Compo3"
function App() {
  return (
    <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <Compo3></Compo3>
    </div>
  );
}

export default App;
