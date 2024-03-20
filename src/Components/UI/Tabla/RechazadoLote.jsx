import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useWindowsDimension from "../../../hook/useWindowsDimension";

const RechazadoLote = ({ facturas }) => {
  const dimensions = useWindowsDimension();

  const RECHAZADO_HEAD = [
    {
      id: "cdc",
      numeric: false,
      label: "CDC",
    },
    {
      id: "codigo",
      numeric: false,
      label: "Codigo",
    },
    {
      id: "mensaje",
      numeric: false,
      label: "Mensaje",
    },
  ];

  return (
    <>
      {Array.isArray(facturas) && facturas.length > 0 && (
        <TableContainer
          sx={{ width: dimensions.width <= 375 ? "80vw" : "100%" }}
        >
          <Table
            sx={{ minWidth: 850, width: "100%" }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <TableHead>
              <TableRow>
                {RECHAZADO_HEAD.map((item) => (
                  <TableCell
                    sx={{ backgroundColor: "#e7f3fd" }}
                    key={item.id}
                    align={"left"}
                    padding="normal"
                  >
                    <p className="grid-head">{item.label}</p>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {facturas.map((factura) => (
                <TableRow
                  key={factura.CDC}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  sx={{ cursor: "pointer", overflow: "hidden" }}
                >
                  <TableCell>
                    <p className="grid-text">{factura.CDC}</p>
                  </TableCell>
                  <TableCell>
                    <p className="grid-text">{factura.codigoError}</p>
                  </TableCell>
                  <TableCell>
                    <p className="grid-text">{factura.error}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {Array.isArray(facturas) && facturas.length === 0 && (
        <ErrorMessage message="No existe ninguna factura rechazada" />
      )}
    </>
  );
};

export default RechazadoLote;
