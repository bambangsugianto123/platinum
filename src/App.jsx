import { RouterProvider } from "react-router-dom";

import ListRouter from "./routes/ListRouter";

function App() {
  return (
    <>
      <RouterProvider router={ListRouter} />
    </>
  );
}

export default App;
