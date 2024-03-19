import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Ruc from "../Ruc/Ruc";
import Factura from "../Factura/Factura";
import Root from "../../Page/Root";
import Error from "../../Page/Error";
import Lote from "../Lote/Lote";
import LandingPage from "../LandingPage/LandingPage";
import Contactos from "../Contactos/Contactos";
import ConsultaRucBase from "../ConsultaRucBase/ConsultaRucBase";

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
          {
            path: "ruc",
            children: [
              { index: true, element: <Ruc /> },
              { path: "base", element: <ConsultaRucBase /> },
            ],
          },
          { path: "factura", element: <Factura /> },
          { path: "lote", element: <Lote /> },
        ],
      },
      { path: "contacto", element: <Contactos /> },
    ],
  },
]);

const RoutersPages = () => {
  return <RouterProvider router={router} />;
};

export default RoutersPages;
