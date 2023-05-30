import { Helmet } from "react-helmet-async";
import PageCover from "./../../shared/PageCover/PageCover";
import coverImg from "../../../assets/shop/banner2.jpg";

const Shop = () => {
  return (
    <>
      {/* React Helmet for dynamic page title */}
      <Helmet>
        <title>Shop | Bistro Boss Restaurant </title>
      </Helmet>

      {/* Page Cover */}
      <PageCover
        image={coverImg}
        heading="Our Shop"
        subHeading="would you like to try a dish?"
      />
    </>
  );
};

export default Shop;
