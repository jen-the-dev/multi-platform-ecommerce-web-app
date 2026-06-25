import assert from "node:assert/strict";
import test from "node:test";
import { calculateCartTotal } from "../src/catalog.js";

test("calculateCartTotal computes sum from known products", () => {
  const total = calculateCartTotal([
    { productId: "sku_001", quantity: 1 },
    { productId: "sku_002", quantity: 2 }
  ]);

  assert.equal(total, 116700);
});

test("calculateCartTotal ignores unknown product IDs", () => {
  const total = calculateCartTotal([{ productId: "missing", quantity: 10 }]);
  assert.equal(total, 0);
});
