import { Parallax } from "react-parallax";

const PageCover = ({ image, heading, subHeading }) => {
  return (
    <Parallax
      blur={{ min: -80, max: 80 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <section className="page-cover-container">
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="py-16 px-5">
            <h1 className="cover-heading">{heading}</h1>
            <p className="cover-sub-heading">{subHeading}</p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default PageCover;
