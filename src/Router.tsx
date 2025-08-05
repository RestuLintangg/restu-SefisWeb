import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Main/homepage/HomePage";
import Product from "./components/Main/product/Product";
import Pricing from "./components/Main/pricing/Pricing";
import Resources from "./components/Main/resources/Resources";
import Partners from "./components/Main/partners/Partners";
import Company from "./components/Main/company/Company";
import Contact from "./components/Main/contact/Contact";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/product", element: <Product /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/resources", element: <Resources /> },
  { path: "/partners", element: <Partners /> },
  { path: "/company", element: <Company /> },
  { path: "/contact", element: <Contact /> },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
