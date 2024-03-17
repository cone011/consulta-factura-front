import { useState } from "react";
import AprobadoLote from "../UI/Tabla/AprobadoLote";
import RechazadoLote from "../UI/Tabla/RechazadoLote";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ResultadoLote = ({ aprobado, rechazado }) => {
  const [showRechazados, setShowRechazados] = useState(false);
  const [showAprobados, setAprobados] = useState(false);

  const onHandlerShowRechazados = () => {
    setShowRechazados((prevRechazado) => !prevRechazado);
  };

  const onHandlerShowAprobados = () => {
    setAprobados((prevAprobado) => !prevAprobado);
  };

  return (
    <>
      <div className="u-margin-bottom-small">
        <div className="lote__header">
          <h2 className="lote__title">Facturas Aprobadas</h2>
          <button className="lote__header-btn" onClick={onHandlerShowAprobados}>
            {!showAprobados ? (
              <ExpandMoreIcon sx={{ fontSize: "3rem" }} />
            ) : (
              <ExpandLessIcon sx={{ fontSize: "3rem" }} />
            )}
          </button>
        </div>
        {showAprobados && <AprobadoLote facturas={aprobado} />}
      </div>

      <div className="u-margin-bottom-small">
        <div className="lote__header">
          <h2 className="lote__title">Facturas Rechazadas</h2>
          <button
            className="lote__header-btn"
            onClick={onHandlerShowRechazados}
          >
            {!showRechazados ? (
              <ExpandMoreIcon sx={{ fontSize: "3rem" }} />
            ) : (
              <ExpandLessIcon sx={{ fontSize: "3rem" }} />
            )}
          </button>
        </div>

        {showRechazados && <RechazadoLote facturas={rechazado} />}
      </div>
    </>
  );
};

export default ResultadoLote;
