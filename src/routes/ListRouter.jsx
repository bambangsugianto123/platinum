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
import ProtectedRoutes from "../Component/ProtectedRoutes";
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
    path: "/search",
    element: <Search />,
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
    path: "",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/payment/:id",
        element: <Payment />,
      },
      {
        path: "/payment/transfer/:id",
        element: <PaymentTransfer />,
      },
      {
        path: "/etiket/:id",
        element: <E_Tiket />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default ListRouter;
