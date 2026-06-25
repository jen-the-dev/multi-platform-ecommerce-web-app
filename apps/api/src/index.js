import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import Stripe from "stripe";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4100);
const stripeKey = process.env.STRIPE_SECRET_KEY || "";
const stripe = stripeKey ? new Stripe(stripeKey) : null;

app.use(helmet());
app.use(cors());
app.use(express.json());

const products = [
  { id: "sku_001", name: "Mechanical Keyboard", priceCents: 16900, currency: "nzd" },
  { id: "sku_002", name: "4K Monitor", priceCents: 49900, currency: "nzd" },
  { id: "sku_003", name: "USB-C Dock", priceCents: 24900, currency: "nzd" }
];

const cartStore = new Map();

app.get("/health", (_req, res) => {
  res.json({
    service: "multi-platform-ecommerce-api",
    status: "ok",
    stripe: stripe ? "configured" : "mock"
  });
});

app.get("/products", (_req, res) => {
  res.json(products);
});

app.post("/cart/:sessionId/items", (req, res) => {
  const { sessionId } = req.params;
  const { productId, quantity = 1 } = req.body || {};
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({ error: "product not found" });
  }

  const existing = cartStore.get(sessionId) || [];
  const updated = [...existing, { productId, quantity }];
  cartStore.set(sessionId, updated);
  return res.status(201).json({ sessionId, items: updated });
});

app.post("/payments/create-intent", async (req, res) => {
  const amount = Number(req.body?.amountCents || 0);
  const currency = String(req.body?.currency || "nzd");

  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ error: "amountCents must be greater than 0" });
  }

  if (!stripe) {
    return res.json({
      provider: "mock",
      clientSecret: "pi_mock_secret_for_local_demo"
    });
  }

  const intent = await stripe.paymentIntents.create({
    amount,
    currency,
    automatic_payment_methods: { enabled: true }
  });

  return res.json({
    provider: "stripe",
    clientSecret: intent.client_secret
  });
});

app.listen(port, () => {
  console.log(`E-commerce API listening on port ${port}`);
});
