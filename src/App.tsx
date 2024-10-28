import { BrowserRouter } from "react-router-dom";
import { FC } from "react";
import { MainContentRouter } from "./components/navigation/mainContentRouter";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <MainContentRouter />
    </BrowserRouter>
  );
};

/* import { FC, useState } from "react";
import { PageLayout } from "./components/pageLayout/pageLayout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Products } from "./pages/products";
import { Product } from "./pages/product";
import { ProductData } from "./types/types";

export const App: FC = () => {
  // State to track the current page and selected product
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(
    null
  );

  // Handle navigation between pages
  const navigateTo = (page: string, product?: ProductData) => {
    setCurrentPage(page);
    if (product) {
      setSelectedProduct(product);
    }
  };

  // Render the appropriate component based on the currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "products":
        return <Products navigateTo={navigateTo} />;
      case "product":
        return <Product product={selectedProduct} navigateTo={navigateTo} />;
      case "home":
      default:
        return <Home />;
    }
  };

  return <PageLayout navigateTo={navigateTo}>{renderPage()}</PageLayout>;
}; */
/**
 *    ------------ Props navigateTo prop tree without React Router Dom -----------
 *     app.tsx
 *            |
 *            |
 *            |
 *            |__ pagelayout.tsx
 *            |                 |
 *            |                 |__ sidebar.tsx
 *            |                                |
 *            |__ products.tsx                 |__ home.tsx 
 *            |               |                | 
 *            |               |__ product.tsx  |__ about.tsx 
 *            |                             |  |
 *            |__product.tsx                |__|__ products.tsx
 *                          |                                  | 
 *                          | products.tsx                     |__ product.tsx
 *                                                             
 *                             { ... To Be Continued ...}                 
 *
 */