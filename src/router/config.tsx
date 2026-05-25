import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import RestaurantPage from "../pages/restaurant/page";
import CheckoutPage from "../pages/checkout/page";
import TrackPage from "../pages/track/page";
import AdminPage from "../pages/admin/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/restaurant/:id",
    element: <RestaurantPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/track",
    element: <TrackPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;