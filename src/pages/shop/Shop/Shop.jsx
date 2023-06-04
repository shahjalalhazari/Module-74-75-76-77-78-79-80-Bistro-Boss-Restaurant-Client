import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import PageCover from "./../../shared/PageCover/PageCover";
import coverImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import ShopTab from "../ShopTab/ShopTab";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
  const categories = ["salads", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const saladItems = menu.filter((item) => item.category === "salad");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const soupItems = menu.filter((item) => item.category === "soup");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const drinkItems = menu.filter((item) => item.category === "drinks");
  return (
    <>
      {/* React Helmet for dynamic page title */}
      <Helmet>
        <title>{`${category.toUpperCase()} - Shop | Bistro Boss Restaurant`} </title>
      </Helmet>

      {/* Page Cover */}
      <PageCover
        image={coverImg}
        heading="Our Shop"
        subHeading="would you like to try a dish?"
      />

      <div className="my-container">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex gap-10 justify-center text-xl font-bold uppercase mb-10">
            {/* <TabList> */}
            {categories.map((category) => (
              <Tab key={category} className={"cursor-pointer"}>
                {category}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            {/* Salad Items */}
            <ShopTab items={saladItems} />
          </TabPanel>
          <TabPanel>
            {/* Pizza Items */}
            <ShopTab items={pizzaItems} />
          </TabPanel>
          <TabPanel>
            {/* Soup Items */}
            <ShopTab items={soupItems} />
          </TabPanel>
          <TabPanel>
            {/* Dessert Items */}
            <ShopTab items={dessertItems} />
          </TabPanel>
          <TabPanel>
            {/* Drink Items */}
            <ShopTab items={drinkItems} />
          </TabPanel>
        </Tabs>

        {/* Pagination Start */}
        <div className="flex justify-between font-bold">
          <button className="bg-navy-blue text-yellow rounded-full py-4 px-5">
            <FaArrowLeft />
          </button>
          <p className="bg-navy-blue text-yellow rounded-full py-4 px-5">
            1 of 20
          </p>
          <button className="bg-navy-blue text-yellow rounded-full py-4 px-5">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
