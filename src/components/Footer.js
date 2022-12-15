import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="Logo" className="footer__logo--img" />
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright--text">Copyright - Suite</p>
        </div>
        <div className="footer__social">
          <div className="footer__social--icon">
            <img
              src={facebook}
              alt="Facebook"
              className="footer__social--icon-img"
            />
          </div>
          <div className="footer__social--icon">
            <img
              src={twitter}
              alt="Twitter"
              className="footer__social--icon-img"
            />
          </div>
          <div className="footer__social--icon">
            <img
              src={instagram}
              alt="Instagram"
              className="footer__social--icon-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
