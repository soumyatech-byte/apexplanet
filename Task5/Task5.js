document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("nav button");
  const products = document.querySelectorAll(".product");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-filter");
      products.forEach(product => {
        product.style.display =
          category === "all" || product.dataset.category === category
            ? "block"
            : "none";
      });
    });
  });

  document.querySelectorAll(".product button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });
});
