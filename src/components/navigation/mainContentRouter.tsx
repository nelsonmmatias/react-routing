import { Routes, Route } from "react-router-dom";
import { Home } from "./../../pages/home";
import { About } from "./../../pages/about";
import { Products } from "./../../pages/products";
import { Product } from "./../../pages/product";
import { Login } from "./../../pages/login";
import { ProtectedRoute } from "./../protectedRoute/protectedRoute";
import { PageLayout } from "../pageLayout/pageLayout";

export const MainContentRouter = () => {
  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </PageLayout>
  );
};
