import { Route, Routes, useNavigate } from "react-router-dom";
import Checkinternet from "./component/Checkinternet";
import LoginPage from "./component/LoginPage";
import DashboardHome from "./component/DashboardHome";
import NotFound from "./component/NotFound";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Checkinternet>

        <Routes>
          <Route path="/" element={<DashboardHome navigate={navigate} />} />
          <Route path="/login" element={<LoginPage navigate={navigate} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Checkinternet>
    </>
  );
}

export default App;
