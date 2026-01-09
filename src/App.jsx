import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ReactLayout } from "./Components/ReactLayout";
// import { Home } from "./pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { RegisterForm } from "./Pages/Register";
import { Login } from "./Pages/Login";
import Profile from "./Pages/Profile";
import { Home } from "./Pages/Home";

export const App = () => {
  const [user, setUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactLayout user={user} setUser={setUser} />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="register"
            element={
              !user ? (
                <RegisterForm
                  setUser={setRegisteredUser}
                  setStatusMessage={setStatusMessage}
                />
              ) : (
                <Navigate to="/profile" />
              )
            }
          />
          <Route
            path="login"
            element={
              !user ? (
                <Login
                  registeredUser={registeredUser}
                  setUser={setUser}
                  setStatusMessage={setStatusMessage}
                />
              ) : (
                <Navigate to="/profile" />
              )
            }
          />
          <Route
            path="profile"
            element={
              user ? (
                <Profile user={user} setUser={setUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
