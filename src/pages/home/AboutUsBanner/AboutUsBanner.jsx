import serviceImg from "../../../assets/home/chef-service.jpg"

const AboutUsBanner = () => {
    return (
      <section className="my-container">
        <div
          className="hero p-10 md:p-28"
          style={{
            backgroundImage: `url("${serviceImg}")`,
          }}
        >
          <div className="hero-overlay bg-opacity-100 bg-white"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="py-6 md:py-12 px-4 md:px-16">
              <h1 className="mb-5 text-5xl cinzel text-black">Bistro Boss</h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutUsBanner;