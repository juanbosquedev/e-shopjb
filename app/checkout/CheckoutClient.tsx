"use client";

import { useCallback, useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { useRouter } from "next/navigation";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../checkout/CheckoutForm";
import Button from "../component/Button";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);
const CheckoutClient = () => {
  const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  console.log(paymentIntent, "paymentIntent");
  console.log(clientSecret, " client secret");

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: cartProducts,
            payment_intent_id: paymentIntent,
          }),
        });

        if (response.status === 401) {
          return router.push("/login");
        }

        const data = await response.json();

        setClientSecret(data.paymentIntent.client_secret);
        handleSetPaymentIntent(data.paymentIntent.id);
      } catch (error) {
        setError(true);
        console.error(error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (cartProducts) {
      fetchData();
    }
  }, [cartProducts, paymentIntent, handleSetPaymentIntent, router]);
  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };
  const handlePaymentSuccess = useCallback((value: boolean) => {
    setPaymentSuccess(value);
  }, []);
  return (
    <div className="w-full">
      {" "}
      {clientSecret && cartProducts && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm
            clientSecret={clientSecret}
            handleSetPaymentSuccess={handlePaymentSuccess}
          />
        </Elements>
      )}
      {loading && <div className="text-center">Loading Checkout...</div>}
      {error && (
        <div className="text-center text-rose-500">Something went wrong</div>
      )}
      {paymentSuccess && (
        <div className="flex items-center flex-col gap-4">
          <div className="text-teal-500 texte-center">Payment Success</div>
          <div className="max-w-[220px] w-full">
            <Button
              label="View Your Orders"
              onClick={() => router.push("/order")}
            ></Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutClient;
