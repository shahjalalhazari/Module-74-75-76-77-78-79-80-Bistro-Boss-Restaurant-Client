import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import PageCover from "./../../shared/PageCover/PageCover";
import coverImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import ItemCard from "./../../../components/ItemCard/ItemCard";

const Shop = () => {
  const [menu] = useMenu();
  const saladItems = menu.filter((item) => item.category === "salad");
  const pizzaItems = menu.filter((item) => item.category === "pizza");
  const soupItems = menu.filter((item) => item.category === "soup");
  const dessertItems = menu.filter((item) => item.category === "dessert");
  const drinktItems = menu.filter((item) => item.category === "drinks");
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

      <div className="my-container">
        <Tabs>
          <TabList className="flex gap-10 justify-center text-xl font-bold uppercase mb-10">
            <Tab className={"cursor-pointer"}>Salads</Tab>
            <Tab className={"cursor-pointer"}>Pizza</Tab>
            <Tab className={"cursor-pointer"}>Soups</Tab>
            <Tab className={"cursor-pointer"}>Desserts</Tab>
            <Tab className={"cursor-pointer"}>Drinks</Tab>
          </TabList>

          <TabPanel>
            {/* Display Items */}
            <div className="three-cols">
              {saladItems.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="three-cols">
              {pizzaItems.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="three-cols">
              {soupItems.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="three-cols">
              {dessertItems.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="three-cols">
              {drinktItems.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </div>
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
