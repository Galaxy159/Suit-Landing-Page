import logo from "../assets/logo.svg";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar__logo">
          <img src={logo} alt="Logo" className="topbar__logo--img" />
        </div>
        <div className="topbar__cta">
          <p className="topbar__cta--text">Request Beta Access</p>
        </div>
      </div>
    </>
  );
}
