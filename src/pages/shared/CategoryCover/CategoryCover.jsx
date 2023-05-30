import { Parallax } from "react-parallax";

const CategoryCover = ({ image, heading, subHeading }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="Category"
      strength={-200}
      className="mt-12 md:mt-0"
    >
      <section className="category-cover-container">
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="py-16 px-5">
            <h1 className="category-cover-heading">{heading}</h1>
            <p className="category-cover-sub-heading">{subHeading}</p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default CategoryCover;
