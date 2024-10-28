import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./../protectedRoute/protectedRoute";
import { PageLayout } from "../pageLayout/pageLayout";
import { lazy, Suspense } from "react";
// import Home from "../../pages/home";
// import About from "../../pages/about";
// import Products from "../../pages/products";
// import Product from "../../pages/product";
// import Login from "../../pages/login";

const Login = lazy(() => import('../../pages/login'));
const Home = lazy(() => import('../../pages/home'));
const About = lazy(() => import('../../pages/about'));
const Products = lazy(() => import('../../pages/products'));
const Product = lazy(() => import('../../pages/product'));

export const MainContentRouter = () => {
  return (
    <PageLayout>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </PageLayout>
  );
};
