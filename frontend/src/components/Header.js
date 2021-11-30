import React, { useState } from "react";

import { RiMap2Line } from "react-icons/ri";

import { Container, Span, Div1 } from "./HeaderStyles";
import Login from "./Login";
import Register from "./Register";

const Header = () => {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(
    myStorage.getItem("user")
  );
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("user");
  };

  return (
    <div>
      <Container>
        <Div1>
          <RiMap2Line size="3rem" />
          <Span
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              marginBottom: "20px",
              marginLeft: "10px",
            }}
          >
            gotMaps?
          </Span>
        </Div1>
      </Container>
      {currentUsername ? (
        <button className="button logout" onClick={handleLogout}>
          Log Out
        </button>
      ) : (
        <div className="buttons">
          <button className="button login" onClick={() => setShowLogin(true)}>
            Login
          </button>
          <button
            className="button register"
            onClick={() => setShowRegister(true)}
          >
            Register
          </button>
        </div>
      )}
      {showRegister && <Register setShowRegister={setShowRegister} />}
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          myStorage={myStorage}
          setCurrentUsername={setCurrentUsername}
        />
      )}
    </div>
  );
};

export default Header;
