import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Ruc from "../Ruc/Ruc";
import Factura from "../Factura/Factura";
import Root from "../../Page/Root";
import Error from "../../Page/Error";
import Lote from "../Lote/Lote";
import LandingPage from "../LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    id: "root",
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "consulta",
        children: [
          { path: "ruc", element: <Ruc /> },
          { path: "factura", element: <Factura /> },
          { path: "lote", element: <Lote /> },
        ],
      },
    ],
  },
]);

const RoutersPages = () => {
  return <RouterProvider router={router} />;
};

export default RoutersPages;
