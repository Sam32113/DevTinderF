import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component_temp/Body";
import Login from "./component_temp/Login";
import Profile from "./component_temp/Profile";
import Feed from "./component_temp/Feed";
import Connections from "./component_temp/Connections";
import Requests from "./component_temp/Requests";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";
 

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
