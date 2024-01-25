import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const buf = buffer(req);
  const sig = req.headers["stripe-signature"];

  if (!sig) {
    return res.status(400).send("Missing the stripe signature");
  }
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      await buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    return res.status(400).send("Webhook" + error);
  }
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent: any = event.data.object as Stripe.PaymentIntent;
  
      if (typeof paymentIntent.id === "string") {
        await prisma?.order.update({
          where: { paymentIntentId: paymentIntent.id },
          data: { status: "complete", address: paymentIntent.shipping?.address },
        });
      }
      break;
    default:
      console.log(event.type);
      console.log("unhandled");
  }
  res.json({ received: true });
}
