import PageCover from "../../shared/PageCover/PageCover";
import coverImg from "../../../assets/menu/banner3.jpg";
import { Helmet } from "react-helmet-async";
import OfferItems from "../OfferItems/OfferItems";

const Menu = () => {
  return (
    <>
      {/* React Helmet for dynamic page title */}
      <Helmet>
        <title>Our Menu | Bistro Boss Restaurant </title>
      </Helmet>

{/* Page Cover */}
      <PageCover
        image={coverImg}
        heading="OUR MENU"
        subHeading="would you like to try a dish?"
      />

      {/* Today's Offer Section */}
      <OfferItems/>
    </>
  );
};

export default Menu;
