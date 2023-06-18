import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
import useCart from "./../../../hooks/useCart";

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <>
      <Helmet>
        <title>Payment | Bistro Boss Restaurant</title>
      </Helmet>
      <div className="text-center w-1/2 mx-auto">
        <h1 className="text-[40px] uppercase mb-16">Payment</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
