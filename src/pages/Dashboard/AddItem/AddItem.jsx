import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const imageHostingToken = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        // if success = true
        if (imgResponse.success) {
          // get the uploaded image url
          const imgUrl = imgResponse.data.display_url;
          // get all the value from form expect image
          const { name, price, category, recipe } = data;
          // convert price value into float number and redefine image value with uploaded img url
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgUrl,
          };
          console.log(newItem);
          // post data to server with axios secure
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("new item added", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item Added Successfully",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
        }
      });
  };
  console.log(errors);
  return (
    <>
      <Helmet>
        <title>Add Item | Bistro Boss Restaurant</title>
      </Helmet>
      <SectionTitle
        heading="Add An Item"
        subHeading="What's New?"
        color="black"
      />

      <div className="bg-gray p-[50px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name Field */}
          <div className="form-control">
            <label htmlFor="name" className="label-text">
              Recipe Name*
            </label>
            <input
              type="text"
              {...register("name", { required: true, maxLength: 120 })}
              placeholder="Recipe Name"
              className="input-field"
            />
            {/* Display Errors */}
            {errors.name && (
              <span className="text-red-600">Recipe Name is required</span>
            )}
          </div>

          <div className="grid md:grid-cols-2 mt-6 gap-x-6 w-full">
            {/* Category Field */}
            <div className="form-control">
              <label htmlFor="category" className="label-text">
                Category*
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered h-16 text-lg"
                defaultValue={"popular"}
              >
                <option>popular</option>
                <option>offered</option>
                <option>salad</option>
                <option>pizza</option>
                <option>soup</option>
                <option>dessert</option>
                <option>drinks</option>
              </select>
              {/* Display Errors */}
              {errors.category && (
                <span className="text-red-600">Category is required</span>
              )}
            </div>

            {/* Price Field */}
            <div className="form-control">
              <label htmlFor="price" className="label-text">
                Price*
              </label>
              <input
                type="number"
                step="0.01"
                {...register("price", {
                  required: true,
                })}
                placeholder="Price"
                className="input-field"
              />
              {/* Display Errors */}
              {errors.price && (
                <span className="text-red-600">Price is required</span>
              )}
            </div>
          </div>

          {/* Details Field */}
          <div className="form-control mt-6">
            <label htmlFor="recipe" className="label-text">
              Recipe Details*
            </label>
            <textarea
              {...register("recipe", {
                required: true,
              })}
              placeholder="Recipe Details"
              cols="30"
              rows="6"
              className="input-field"
            ></textarea>
            {/* Display Errors */}
            {errors.recipe && (
              <span className="text-red-600">Recipe Details is required</span>
            )}
          </div>

          {/* Photo Field */}
          <div className="form-control mt-6">
            <label htmlFor="image" className="label-text">
              Recipe Image*
            </label>
            <input
              type="file"
              {...register("image", {
                required: true,
              })}
              className="file-input text-lg file-input-bordered w-full"
            />
            {/* Display Errors */}
            {errors.image && (
              <span className="text-red-600">Image is required</span>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="flex items-center add-item-btn">
            Add Item <FaUtensils className="ml-2" />
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
