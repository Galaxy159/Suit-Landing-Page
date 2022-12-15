import avatar from "../assets/image-jeremy-small.png";
import curve from "../assets/pattern-curved-line-2.svg";
import blur from "../assets/pattern-blur.svg";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div className="testimonial__avatar">
          <img src={blur} alt="Blur" className="testimonial__avatar--blur" />
          <img
            src={avatar}
            alt="Fylo CMO"
            className="testimonial__avatar--img"
          />
        </div>
        <div className="testimonial__curve">
          <img
            src={curve}
            alt="Curved line"
            className="testimonial__curve--img"
          />
        </div>
        <div className="testimonial__content">
          <h2 className="testimonial__content--headline">
            It just <span>works.</span>
          </h2>
          <p className="testimonial__content--text">
            “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”
          </p>
          <p className="testimonial__content--name">Jeremy Robinson</p>
          <p className="testimonial__content--position">CMO, Fylo</p>
        </div>
      </div>
    </>
  );
}
