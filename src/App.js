import { Link, Route, Routes } from "react-router-dom";
import Checkinternet from "./component/Checkinternet";
import LoginPage from "./component/LoginPage";
import DashboardHome from "./component/DashboardHome";
function App() {
  return (
    <>
      <Checkinternet>
        <div className="App">
          <ul>
            <li>
              <Link to={"/"}> home</Link>
            </li>
            <li>
              <Link to={"/login"}> login</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DashboardHome />} />
        </Routes>
      </Checkinternet>
    </>
  );
}

export default App;
