import cors from "cors";
import express from "express";
import helmet from "helmet";
import { products } from "./catalog.js";

export function createStorefrontApiApp({ stripeClient } = {}) {
  const app = express();
  const cartStore = new Map();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({
      service: "multi-platform-ecommerce-api",
      status: "ok",
      stripe: stripeClient ? "configured" : "mock"
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

    if (!stripeClient) {
      return res.json({
        provider: "mock",
        clientSecret: "pi_mock_secret_for_local_demo"
      });
    }

    const intent = await stripeClient.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true }
    });

    return res.json({
      provider: "stripe",
      clientSecret: intent.client_secret
    });
  });

  return app;
}
