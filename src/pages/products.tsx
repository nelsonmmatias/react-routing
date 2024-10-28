import "./products.css";
import { FC } from "react";
import { ProductData } from "../types/types";
import { useNavigate } from "react-router-dom";

const Products: FC = () => {
  const navigate = useNavigate();

  const productList: ProductData[] = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a high-quality product that meets all your needs.",
      price: "199€",
      image:
        "https://as1.ftcdn.net/v2/jpg/00/98/26/84/1000_F_98268439_VN7axMw09PhLAUA4ctLKfbbQdbrwRp6m.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description:
        "This is an innovative product that solves your problems efficiently.",
      price: "299€",
      image:
        "https://img.freepik.com/vector-premium/icono-idea-genial_946691-2313.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This product is top-notch and offers the best features.",
      price: "399€",
      image:
        "https://www.creativefabrica.com/wp-content/uploads/2022/01/15/Top-Notch-Logo-Design-AI-SVG-PNG-PDF-Graphics-23524670-1-312x208.jpg",
    },
  ];

  const handleClick = (product: ProductData) => {
    // we can pass some state to the navigation
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button
              onClick={() => handleClick(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
