import { Routes, Route } from "react-router-dom";
import { Start } from "./pages/Start";
import { UserLogin } from "./pages/UserLogin";
import { UserSignUp } from "./pages/UserSignUp";
import { CaptainLogin } from "./pages/CaptainLogin";
import { CaptainSignUp } from "./pages/CaptainSignUp";
import { Home } from "./pages/Home";
import { UserProtectedWrapper } from "./pages/UserProtectedWrapper";
import { UserLogout } from "./pages/UserLogout";
import { CaptainHome } from "./pages/CaptainHome";
import { CaptainProtectedWrapper } from "./pages/CaptainProtectedWrapper";
import { UserContext } from "./context/UserContext";
import { CaptainLogout } from "./pages/CaptainLogout"; // Import the CaptainLogout component
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
    <UserContext> {/* Wrap the whole app with UserContext */}
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/riding" element={<Riding />} />
          <Route path="/captain-riding" element={<CaptainRiding />} />
          <Route path="/user-signup" element={<UserSignUp />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignUp />} />
          <Route path="/home" element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          } />
          <Route path="/users/logout" element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          } />
          <Route path="/captain-home" element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          } />
          <Route path="/captains/logout" element={
            <CaptainProtectedWrapper>
              <CaptainLogout />
            </CaptainProtectedWrapper>
          } />
        </Routes>
      </div>
    </UserContext>
  );
}

export default App;
