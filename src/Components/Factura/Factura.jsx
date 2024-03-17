import { useRef, useState, useReducer } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { componetReducer, initialComponent } from "../Reducer/componentReducer";
import { consultarFactura } from "../../api/factura";
import CustomInput from "../UI/CustomInput/CustomInput";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Loading from "../UI/Loading/Loading";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import CustomButton from "../UI/CustomButton/CustomButton";
import ImpresionFactura from "../UI/ImpresionFactura/ImpresionFactura";

const Factura = () => {
  const cdcInputRef = useRef();
  const facturaRef = useRef();
  const [datoFactura, setDatoFactura] = useState();
  const [state, dispatch] = useReducer(componetReducer, initialComponent);

  const onSearchFacturaHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch({
        type: "SHOW",
        typeComponent: "loading",
        message: "Buscando Factura en SIFEN",
      });

      setDatoFactura(null);

      const enteredCdc = cdcInputRef.current.value;

      if (enteredCdc.length !== 44) {
        throw new Error("El CDC debe contener 44 caracteres");
      }

      const result = await consultarFactura(enteredCdc);

      setDatoFactura(result);

      dispatch({ type: "CLOSE" });
    } catch (err) {
      dispatch({ type: "SHOW", typeComponent: "error", message: err.message });
    }
  };

  const handlePrint = useReactToPrint({
    content: () => facturaRef.current,
    documentTitle: "Visitor Pass",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });

  const onNavigateToSet = async () => {
    try {
      window.open(datoFactura.qr);
    } catch (err) {
      dispatch({ type: "SHOW", typeComponent: "error", message: err.message });
    }
  };

  let printComponet = (
    <div className="factura_button">
      <CustomButton type="button" onClick={handlePrint}>
        Descargar PDF
      </CustomButton>
      <CustomButton
        type="button"
        onClick={() => {
          onNavigateToSet(cdcInputRef.current.value);
        }}
      >
        SET
      </CustomButton>
    </div>
  );

  return (
    <>
      <div className="factura">
        <div className="factura__form">
          <Box>
            <div className="u-text-center">
              <h2 className="factura__title">
                Buscador de Factura Electronica&nbsp;(SIFEN)
              </h2>
              <h3 className="paragraph">
                Obs: Solo se ingresa el CDC de la factura
              </h3>
            </div>
            <form onSubmit={onSearchFacturaHandler}>
              <div className="factura__form--container">
                <CustomInput
                  showLabel={false}
                  inputTitle="Busque su factura"
                  id="cdc"
                  type="text"
                  name="cdc"
                  margin="normal"
                  required
                  fullWidth
                  label="Busque su factura"
                  ref={cdcInputRef}
                  fontSize="1.5rem"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => (cdcInputRef.current.value = "")}
                        >
                          <CloseIcon />
                        </IconButton>
                        <IconButton onClick={onSearchFacturaHandler}>
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
          {state.isShow && state.typeComponent === "loading" && (
            <Loading message={state.message} />
          )}
          {state.isShow && state.typeComponent === "error" && (
            <ErrorMessage message={state.message} />
          )}
        </div>
      </div>
      {datoFactura && (
        <>
          <div className="factura">
            <div className="factura_result">
              {printComponet}
              <ImpresionFactura facturaObject={datoFactura} ref={facturaRef} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Factura;
