import "./footer.css";
import footerImg from "../../images/mainLogo.png";
import { LinkedIn } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_container  grid gap_3">
        <div className="footer_container_top">
          <p>Need a Website</p>
          <a href="tel:+91-987-732-0263" >
            <h3 >Call me at +91-987-732-0263</h3>
          </a>
        </div>
        <div className="footer_container_middle | flex_align_center gap_1">
          <img src={footerImg} alt="FooterLogo" />
          <p className="footer_container_middle_phone_links | grid gap_1 secondary_color">
            <div className="footer_container_phone"><a href="mailto:dilpreetweb65@gmail.com" style={{textDecoration:"underline"}}>dilpreetweb65@gmail.com</a></div>
            <div className="footer_container_links | flex_align_center ">
              <LinkedIn className="footer_container_links_icons" />
              <a href="/" style={{textDecoration:"underline"}}>My Portfolio</a>
            </div>
          </p>
        </div>
        <div className="footer_container_bottom">
          <p>© 2023. Dilpreet Singh. All rights reserved. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
