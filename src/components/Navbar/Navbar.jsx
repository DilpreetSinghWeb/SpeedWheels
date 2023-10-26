import { useState } from "react";
import "./navbar.css";
import { Close, MenuSharp } from "@mui/icons-material";
import logoPhoto from "../../images/mainLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="navbar | navbar_bg" id="navbar">
      <div className="navbar_container ">
        <div className="navbar_container_logo">
         <a href="https://dilpreetsinghweb.github.io/SpeedWheels/"><img src={logoPhoto} alt="LogoPhoto" /></a> 
        </div>
        <div
          className={`navbar_container_bars ${menuOpen ? "open" : ""}`}
          onClick={handleMenuClick}
          style={{ transition: "transform .3s ease" }}
        >
          {menuOpen ? (
            <Close style={{ fontSize: "35px" }} />
          ) : (
            <MenuSharp style={{ fontSize: "35px" }} />
          )}
        </div>
        <div className={`navbar_container_items ${menuOpen ? "open" : ""}`}>
          <ul>
            <li
              onClick={() => {
                handleMenuClick();
              }}
              className={`${menuOpen ? "open" : ""}`}
            >
              <a href="#info">About</a>
            </li>
            <li
              onClick={handleMenuClick}
              className={`${menuOpen ? "open" : ""}`}
            >
              <a href="#car_models">Cars</a>
            </li>
            <li
              onClick={handleMenuClick}
              className={`${menuOpen ? "open" : ""}`}
            >
              <a href="#footer">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
