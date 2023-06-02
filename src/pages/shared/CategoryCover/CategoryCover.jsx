import { Parallax } from "react-parallax";

const CategoryCover = ({ image, heading }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt={heading}
      strength={-200}
    >
      <section className="category-cover-container">
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="py-16 px-5">
            <h1 className="category-cover-heading">{heading}</h1>
            <p className="category-cover-sub-heading">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default CategoryCover;
