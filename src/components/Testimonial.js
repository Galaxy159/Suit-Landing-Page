import avatar from "../assets/image-jeremy-small.png";
import curve from "../assets/pattern-curved-line-2.svg";
import avatardesktop from "../assets/image-jeremy-large.png";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div className="testimonial__avatar">
          <picture>
            <source srcSet={avatardesktop} media="(min-width: 1440px)" />
            <img
              src={avatar}
              alt="Fylo CMO"
              className="testimonial__avatar--img"
            />
          </picture>
        </div>
        <div className="testimonial__content">
          <div className="testimonial__content--curve">
            <img
              src={curve}
              alt="Curved line"
              className="testimonial__content--curve-img"
            />
          </div>
          <div className="testimonial__content--container">
            <h2 className="testimonial__content--headline">
              It just <span>works.</span>
            </h2>
            <p className="testimonial__content--text">
              “I really like how it is an all-in-one solution that handle many
              of the tasks that you would normally need separate tools to do the
              same job. This thing is a miracle worker.”
            </p>
            <p className="testimonial__content--name">JEREMY ROBINSON</p>
            <p className="testimonial__content--position">CMO, FYLO</p>
          </div>
        </div>
      </div>
    </>
  );
}
