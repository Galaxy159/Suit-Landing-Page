import logo from "../assets/logo.svg";
import sprite from "../assets/sprite.svg";

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
          <svg className="footer__social--icon">
            <use href={`${sprite}#icon-facebook`} />
          </svg>
          <svg className="footer__social--icon">
            <use href={`${sprite}#icon-twitter`} />
          </svg>
          <svg className="footer__social--icon">
            <use href={`${sprite}#icon-instagram`} />
          </svg>
        </div>
      </div>
    </>
  );
}
