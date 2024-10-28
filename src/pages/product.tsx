import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductData } from "../types/types";

const Product: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // using location state to get the product
  const product = location.state?.product as ProductData | undefined;

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleBackClick = () => {
    navigate("/products");
  };

  return (
    <div className="product-detail-page">
      <button onClick={handleBackClick} className="back-button">
        ← Back to Products
      </button>

      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
