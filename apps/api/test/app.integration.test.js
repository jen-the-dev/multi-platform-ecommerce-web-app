import assert from "node:assert/strict";
import test from "node:test";
import { createStorefrontApiApp } from "../src/app.js";

test("storefront API exposes products, cart, and payment intent endpoints", async (t) => {
  const app = createStorefrontApiApp();
  const server = app.listen(0);

  t.after(() => {
    server.close();
  });

  const port = server.address().port;
  const baseUrl = `http://localhost:${port}`;

  const productsResponse = await fetch(`${baseUrl}/products`);
  assert.equal(productsResponse.status, 200);
  const products = await productsResponse.json();
  assert.ok(products.length > 0);

  const cartResponse = await fetch(`${baseUrl}/cart/session-1/items`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ productId: "sku_001", quantity: 2 })
  });
  assert.equal(cartResponse.status, 201);

  const paymentResponse = await fetch(`${baseUrl}/payments/create-intent`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ amountCents: 5000, currency: "nzd" })
  });
  assert.equal(paymentResponse.status, 200);
  const payment = await paymentResponse.json();
  assert.equal(payment.provider, "mock");
});
