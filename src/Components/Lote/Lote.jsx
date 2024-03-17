import { useReducer, useRef, useState } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { componetReducer, initialComponent } from "../Reducer/componentReducer";
import { consultaLoteFactura } from "../../api/lote";
import CustomInput from "../UI/CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ResultadoLote from "../ResultadoLote/ResultadoLote";
import ShowComponent from "../UI/ShowComponent/ShowComponent";

const Lote = () => {
  const loteInputRef = useRef();
  const [datosLote, setDatosLote] = useState({ aprobado: [], rechazado: [] });
  const [state, dispatch] = useReducer(componetReducer, initialComponent);

  const onSearchLoteHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch({
        type: "SHOW",
        typeComponent: "loading",
        message: "Buscando Lote de factura",
      });

      setDatosLote(null);

      const enteredLote = loteInputRef.current.value;

      if (!enteredLote) {
        throw new Error(
          "Favor de ingresar un numero de lote para realizar la consulta"
        );
      }

      if (isNaN(enteredLote)) {
        throw new Error("Favor ingresar un numero para realizar la consulta");
      }

      const { aprobado, rechazado } = await consultaLoteFactura(enteredLote);

      setDatosLote({ aprobado: aprobado, rechazado: rechazado });

      dispatch({ type: "CLOSE" });
    } catch (err) {
      dispatch({ type: "SHOW", typeComponent: "error", message: err.message });
    }
  };

  return (
    <>
      <div className="lote">
        <div className="lote__form">
          <Box>
            <div className="u-text-center">
              <h2 className="lote__title">Buscador de Lote&nbsp;(SIFEN)</h2>
              <h3 className="paragraph">Obs: El codigo debe ser numerico</h3>
              <h3 className="paragraph">
                El Lote solo estara DISPONIBLE POR 48 HS.
              </h3>
            </div>
            <form onSubmit={onSearchLoteHandler}>
              <div className="lote__form--container">
                <CustomInput
                  showLabel={false}
                  inputTitle="Lote"
                  id="lote"
                  type="numeric"
                  name="lote"
                  margin="normal"
                  required
                  fullWidth
                  label="Buscar Lote Ej: 11450827054641890"
                  ref={loteInputRef}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => (loteInputRef.current.value = "")}
                        >
                          <CloseIcon />
                        </IconButton>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomButton>Buscar</CustomButton>
              </div>
            </form>
          </Box>
          {state.isShow && (
            <ShowComponent
              typeComponent={state.typeComponent}
              message={state.message}
            />
          )}
        </div>
      </div>

      {!state.isShow &&
        (datosLote.aprobado.length > 0 || datosLote.rechazado.length > 0) && (
          <>
            <div className="lote_resultado">
              <div className="lote_resultado-container">
                <ResultadoLote
                  aprobado={datosLote.aprobado}
                  rechazado={datosLote.rechazado}
                />
              </div>
            </div>
          </>
        )}
    </>
  );
};

export default Lote;
