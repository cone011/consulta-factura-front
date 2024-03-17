import { useReducer } from "react";
import { initialModal, modalReducer } from "../../Reducer/modalReducer";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TYPE_MODAL } from "../../../../utils/const";
import { consultarFactura } from "../../../api/factura";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Modal from "../Modal/Modal";

const AprobadoLote = ({ facturas }) => {
  const [state, dispatch] = useReducer(modalReducer, initialModal);
  const APROVADO_HEAD = [
    {
      id: "cdc",
      numeric: false,
      label: "CDC",
      align: "right",
    },
  ];

  const onNavigateToSet = async (cdc) => {
    try {
      dispatch({
        type: "SHOW",
        message: "Obteniendo la factura desde SIFEN",
        typeModal: TYPE_MODAL.LOADING,
      });

      const factura = await consultarFactura(cdc);

      window.open(factura.qr);

      dispatch({ type: "CLOSE" });
    } catch (err) {
      dispatch({
        type: "SHOW",
        message: err.message,
        typeModal: TYPE_MODAL.ERROR,
      });
    }
  };

  const onCloseModal = () => {
    dispatch({ type: "CLOSE" });
  };

  return (
    <>
      {state.isShow && (
        <Modal
          typeModal={state.typeModal}
          message={state.message}
          onClose={onCloseModal}
        />
      )}
      {facturas.length > 0 && Array.isArray(facturas) && (
        <TableContainer sx={{ width: "auto" }}>
          <Table
            sx={{ minWidth: 500, width: "100%" }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <TableHead>
              <TableRow>
                {APROVADO_HEAD.map((item) => (
                  <TableCell
                    sx={{ backgroundColor: "#e7f3fd" }}
                    key={item.id}
                    padding="normal"
                  >
                    <p className="grid-head">{item.label}</p>
                  </TableCell>
                ))}
                <TableCell
                  sx={{ backgroundColor: "#e7f3fd" }}
                  align="right"
                  padding="normal"
                >
                  <p className="grid-head">Accion</p>
                </TableCell>
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
                  <TableCell width={300}>
                    <p className="grid-text">{factura.CDC}</p>
                  </TableCell>
                  <TableCell align="right">
                    <button
                      className="grid-btn"
                      onClick={() => onNavigateToSet(factura.CDC)}
                    >
                      SET
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {(!Array.isArray(facturas) || facturas.length === 0) && (
        <ErrorMessage message="No hay ninguna factura aprobada" />
      )}
    </>
  );
};

export default AprobadoLote;
