import dotenv from "dotenv";
import Stripe from "stripe";
import { createStorefrontApiApp } from "./app.js";

dotenv.config();

const port = Number(process.env.PORT || 4100);
const stripeKey = process.env.STRIPE_SECRET_KEY || "";
const stripe = stripeKey ? new Stripe(stripeKey) : null;
const app = createStorefrontApiApp({ stripeClient: stripe });


app.listen(port, () => {
  console.log(`E-commerce API listening on port ${port}`);
});
