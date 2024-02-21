import { useRef, useState, useReducer } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { componetReducer, initialComponent } from "../Reducer/componentReducer";
import CustomInput from "../UI/CustomInput/CustomInput";
import SearchIcon from "@mui/icons-material/Search";

const Factura = () => {
  const cdcInputRef = useRef();
  const [datoFactura, setDatoFactura] = useState();
  const [state, dispatch] = useReducer(componetReducer, initialComponent);

  const onSearchRucHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch({
        type: "SHOW",
        typeComponent: "loading",
        message: "Buscando Factura",
      });

      setDatosRuc(null);

      const enteredCdc = cdcInputRef.current.value;

      // if (enteredRuc.length > 44) {
      //   throw new Error("El ruc tiene un maximo de longitud de 8 caracteres");
      // }

      //const result = await consulta(enteredCdc);

      setDatoFactura(result);

      dispatch({ type: "CLOSE" });
    } catch (err) {
      dispatch({ type: "SHOW", typeComponent: "error", message: err.message });
    }
  };
  return (
    <div className="compra">
      <div className="compra__form">
        <Box>
          <div className="u-text-center">
            <h2 className="compra__title">Buscador de ruc</h2>
          </div>
          <form onSubmit={onSearchRucHandler}>
            <div>
              <CustomInput
                showLabel={true}
                inputTitle="Busque su factura"
                id="cdc"
                type="text"
                name="cdc"
                margin="normal"
                required
                fullWidth
                label="Busque su factura"
                ref={cdcInputRef}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div>
              <button>Buscar</button>
            </div>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Factura;
