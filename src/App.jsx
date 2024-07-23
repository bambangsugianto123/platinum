// import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Car from "./Pages/Car";
import CarDetail from "./Pages/CarDetail";
import Payment from "./Pages/Payment";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Search from "./Pages/Search";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PaymentTransfer from "./Pages/PaymentTransfer";
import E_Tiket from "./Pages/E_Tiket";

import ListRouter from "./routes/ListRouter";

function App() {
  return (
    <>
      <RouterProvider router={ListRouter} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="car">
              <Route index element={<Car />} />
              <Route path=":id" element={<CarDetail />} />
              <Route path="etiket" element={<E_Tiket />} />
            </Route>
            <Route path="search" element={<Search />} />
            <Route path="payment">
              <Route path=":id" element={<Payment />} />
              <Route path="transfer/:id" element={<PaymentTransfer />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
