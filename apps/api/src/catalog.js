export const products = [
  { id: "sku_001", name: "Mechanical Keyboard", priceCents: 16900, currency: "nzd" },
  { id: "sku_002", name: "4K Monitor", priceCents: 49900, currency: "nzd" },
  { id: "sku_003", name: "USB-C Dock", priceCents: 24900, currency: "nzd" }
];

export function calculateCartTotal(items) {
  return items.reduce((accumulator, item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    if (!product) {
      return accumulator;
    }

    const quantity = Number(item.quantity || 1);
    return accumulator + product.priceCents * quantity;
  }, 0);
}
