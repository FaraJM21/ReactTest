import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import SwitchTheme from "../switch/switchTheme";

import "./style.scss";
function Navbar() {
  return (
    <header className="header">
      <Container maxWidth="lg">
        <div className="nav">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="404" />
            </Link>
          </div>
          <SwitchTheme />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
