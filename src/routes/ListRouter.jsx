import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Car from "../Pages/Car";
import CarDetail from "../Pages/CarDetail";
import E_Tiket from "../Pages/E_Tiket";
import Search from "../Pages/Search";
import Payment from "../Pages/Payment";
import PaymentTransfer from "../Pages/PaymentTransfer";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
const ListRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/car",
    element: <Car />,
  },
  {
    path: "/car/:id",
    element: <CarDetail />,
  },
  {
    path: "etiket",
    element: <E_Tiket />,
  },
  {
    path: "/search",
    element: <Search />,
  },

  {
    path: "/payment/:id",
    element: <Payment />,
  },
  {
    path: "/payment/transfer/:id",
    element: <PaymentTransfer />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default ListRouter;
