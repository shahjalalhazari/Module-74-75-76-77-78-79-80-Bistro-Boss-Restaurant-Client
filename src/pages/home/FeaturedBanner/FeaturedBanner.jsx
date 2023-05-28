import featuredImg from "../../../assets/home/featured.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FeaturedBanner = () => {
  return (
    <section className="">
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url("${featuredImg}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="my-container">
          <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Check it out"
            color={"white"}
          />
          <div className="md:flex gap-6 md:mb-16">
            <img src={featuredImg} alt="Featured Image" className="w-[500px]" />
            <div className="hero-content text-neutral-content text-center md:text-start">
              <div className="">
                <h4 className="mb-2">March 20, 2023</h4>
                <h1 className="text-2xl font-semibold mb-2">
                  WHERE CAN I GET SOME?
                </h1>
                <p className="mb-6 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="white-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
