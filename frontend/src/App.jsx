import { Routes,Route } from "react-router-dom";
import { Start } from "./pages/Start";
import { UserLogin } from "./pages/UserLogin";
import { UserSignUp } from "./pages/UserSignUp";
import { CaptainLogin } from "./pages/CaptainLogin";
import { CaptainSignUp } from "./pages/CaptainSignUp";
import { useContext } from "react";
import { UserDataContext } from "./context/UserContext";
import { Home } from "./pages/Home";
import { UserProtectedWrapper } from "./pages/UserProtectedWrapper";
import { UserLogout } from "./pages/UserLogout";
import { CaptainHome } from "./pages/CaptainHome";

const App = () => {

  
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} a/>
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
         <Route path="/captain-home" element={<CaptainHome/>} />
      </Routes>
    </div>
  )
}

export default App;
