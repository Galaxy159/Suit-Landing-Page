import curve from "../assets/pattern-curved-line-1.svg";
import hero from "../assets/image-hero-landscape.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__content">
          <h1 className="header__headline--text">
            A{" "}
            <span>
              super{" "}
              <span className="header__headline--img-container">
                <img
                  src={curve}
                  alt="Curved line"
                  className="header__headline--img"
                />
                solution
              </span>
            </span>{" "}
            for your <span>business.</span>
          </h1>
          <p className="header__text">
            Our marketing and sales automations help you scale your outreach to
            get more leads for your company.
          </p>
          <div className="header__cta">
            <p className="header__cta--text">Request Beta Access</p>
          </div>
        </div>

        <div className="header__stats">
          <div className="header__stats--item">
            <p className="header__stats--item-number">2K+</p>
            <p className="header__stats--item-text">Companies</p>
          </div>
          <div className="header__stats--item">
            <p className="header__stats--item-number">8</p>
            <p className="header__stats--item-text">Languages</p>
          </div>
          <div className="header__stats--item">
            <p className="header__stats--item-number">1.2M</p>
            <p className="header__stats--item-text">Leads</p>
          </div>
        </div>
        <div className="header__hero">
          <img src={hero} alt="Hero" className="header__hero--img" />
        </div>
      </div>
    </>
  );
}
