const PageCover = ({ image, heading, subHeading }) => {
  return (
    <section className="">
      <div
        className="page-cover-container"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="py-16 px-5">
            <h1 className="cover-heading">{heading}</h1>
            <p className="cover-sub-heading">
              {subHeading}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageCover;
