import { Container } from "@mui/system";
import React from "react";
import logo from "../../assets/logo.png";
import SearchForm from "../searchform/searchform";
import "./style.scss";
function Navbar() {
  return (
    <header className="header">
      <Container maxWidth="lg">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="404" />
          </div>
          <SearchForm />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
