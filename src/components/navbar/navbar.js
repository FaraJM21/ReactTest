import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

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
      
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
