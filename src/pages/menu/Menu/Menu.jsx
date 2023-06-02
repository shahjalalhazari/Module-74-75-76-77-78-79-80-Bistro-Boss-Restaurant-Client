import { Helmet } from "react-helmet-async";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PageCover from "../../shared/PageCover/PageCover";
import coverImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";

import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
  const [menu] = useMenu();
  const offerItems = menu.filter((item) => item.category === "offered");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const saladItems = menu.filter((item) => item.category === "salad");
  const soupItems = menu.filter((item) => item.category === "soup");
  const drinkItems = menu.filter((item) => item.category === "drinks");


  return (
    <>
      {/* React Helmet for dynamic page title */}
      <Helmet>
        <title>Menu | Bistro Boss Restaurant </title>
      </Helmet>

      {/* Page Cover */}
      <PageCover
        image={coverImg}
        heading="OUR MENU"
        subHeading="would you like to try a dish?"
      />

      {/* ------------OFFER ITEMS----------------- */}

      {/* Today's Offer Section */}
      <div className="my-container">
        <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
      </div>
      <MenuCategory items={offerItems} />

      {/* ------------DESSERT ITEMS----------------- */}
      <MenuCategory
        items={dessertItems}
        heading="desserts"
        coverImage={dessertImg}
      />

      {/* --------------PIZZA ITEMS------------------ */}
      <MenuCategory items={pizzaItems} heading="pizza" coverImage={pizzaImg} />

      {/* ------------SALADS ITEMS-------------------- */}
      <MenuCategory
        items={saladItems}
        heading="salads"
        coverImage={saladsImg}
      />

      {/* ---------------SOUPS ITEMS----------------- */}
      <MenuCategory
        items={soupItems}
        heading="soups"
        coverImage={soupImg}
      />

      {/* ---------------DRINKS ITEMS----------------- */}
      <MenuCategory
        items={drinkItems}
        heading="drinks"
        coverImage={dessertImg}
      />
    </>
  );
};

export default Menu;
