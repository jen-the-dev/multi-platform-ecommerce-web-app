const featuredProducts = [
  { id: "sku_001", name: "Mechanical Keyboard", price: "NZ$169.00" },
  { id: "sku_002", name: "4K Monitor", price: "NZ$499.00" },
  { id: "sku_003", name: "USB-C Dock", price: "NZ$249.00" }
];

export default function HomePage() {
  return (
    <main style={{ margin: "2rem auto", maxWidth: "60rem", fontFamily: "Inter, sans-serif" }}>
      <h1>Portfolio Storefront</h1>
      <p>Starter full-stack e-commerce sample for ANZSCO 261312 evidence.</p>
      <section style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {featuredProducts.map((product) => (
          <article key={product.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: "1rem" }}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button type="button">Add to cart</button>
          </article>
        ))}
      </section>
    </main>
  );
}
