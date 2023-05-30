import PageCover from "../../shared/PageCover/PageCover";
import coverImg from "../../../assets/menu/banner3.jpg";
import { Helmet } from "react-helmet-async";
import OfferItems from "../OfferItems/OfferItems";
import DessertsItems from "../DessertsItems/DessertsItems";
import CategoryCover from "../../shared/CategoryCover/CategoryCover";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import PizzaItems from "../PizzaItems/PizzaItems";
import saladsImg from "../../../assets/menu/salad-bg.jpg"
import SaladItems from "../SaladItems/SaladItems";

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

      {/* ----------------------------- */}

      {/* Today's Offer Section */}
      <OfferItems />

      {/* ----------------------------- */}

      {/* Dessert Items Cover Photo */}
      <CategoryCover
        image={dessertImg}
        heading="Desserts"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      {/* Desserts Items List */}
      <DessertsItems />

      {/* -------------------------------- */}

      {/* Pizza Items Cover Photo */}
      <CategoryCover
        image={pizzaImg}
        heading="Pizza"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      {/* Pizza items list */}
      <PizzaItems />


      {/* -------------------------------- */}

      {/* Pizza Items Cover Photo */}
      <CategoryCover
        image={saladsImg}
        heading="Salads"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      {/* Pizza items list */}
      <SaladItems/>
    </>
  );
};

export default Menu;
