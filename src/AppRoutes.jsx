import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
const AppRoutes = [
  {
    index: true,
    element: <ProductListing />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },
];
export default AppRoutes;
