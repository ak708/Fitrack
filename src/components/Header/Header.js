import React from "react";
import "./Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
function Header() {
  return (
    <div class="nav">
      <div class="nav-header">
        <div class="nav-title">FITRACK</div>
      </div>
      <div class="nav-links">
        <a href="https://github.com/ak708/Fitrack" target="_blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default Header;
