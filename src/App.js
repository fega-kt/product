import { Route, Routes, useNavigate } from "react-router-dom";
import Checkinternet from "./component/Checkinternet";
import LoginPage from "./component/LoginPage";
import DashboardHome from "./component/DashboardHome";
import NotFound from "./component/NotFound";
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore'
import store from "./redux/store";

configureStore()
// const initialState = {};
// const store = configureStore(initialState, sagaMiddleware);
function App() {
  const navigate = useNavigate();
  return (
    <>

      <Provider store={store}>
        <SnackbarProvider>
          {/* <ConnectedRouter history={history}> */}
          {/* <MuiPickersUtilsProvider utils={MomentUtils}> */}
          <Checkinternet>
            <Routes>
              <Route path="/" element={<DashboardHome navigate={navigate} />} />
              <Route path="/login" element={<LoginPage navigate={navigate} />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Checkinternet>
          {/* </MuiPickersUtilsProvider> */}
          {/* </ConnectedRouter> */}
        </SnackbarProvider>
      </Provider>






    </>
  );
}

export default App;
