import { useReducer, useRef, useState } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { consultarRuc } from "../../api/ruc";
import { componetReducer, initialComponent } from "../Reducer/componentReducer";
import CustomInput from "../UI/CustomInput/CustomInput";
import SearchIcon from "@mui/icons-material/Search";
import Loading from "../UI/Loading/Loading";

const Ruc = () => {
  const rucInputRef = useRef();
  const [datosRuc, setDatosRuc] = useState();
  const [state, dispatch] = useReducer(componetReducer, initialComponent);

  const onSearchRucHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch({
        type: "SHOW",
        typeComponent: "loading",
        message: "Buscando Ruc",
      });

      setDatosRuc(null);

      const enteredRuc = rucInputRef.current.value;

      if (enteredRuc.length > 9) {
        throw new Error("El ruc tiene un maximo de longitud de 8 caracteres");
      }

      const result = await consultarRuc(enteredRuc);

      setDatosRuc(result);

      dispatch({ type: "CLOSE" });
    } catch (err) {
      dispatch({ type: "SHOW", typeComponent: "error", message: err.message });
    }
  };

  return (
    <>
      <div className="ruc">
        <div className="ruc__form">
          <Box>
            <div className="u-text-center">
              <h2 className="ruc__title">Buscador de ruc</h2>
            </div>
            <form onSubmit={onSearchRucHandler}>
              <div>
                <CustomInput
                  showLabel={true}
                  inputTitle="Ruc"
                  id="ruc"
                  type="text"
                  name="ruc"
                  margin="normal"
                  required
                  fullWidth
                  label="Buscar Ruc"
                  ref={rucInputRef}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={onSearchRucHandler}>
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
          {state.isShow && state.typeComponent === "loading" && (
            <Loading message={state.message} />
          )}
          {datosRuc && (
            <div className="u-text-center">
              <h2 className="heading-secondary u-margin-bottom-small">
                Resultado encontrado
              </h2>
              <p className="paragraph">{`RUC: ${datosRuc.ruc}`}</p>
              <p className="paragraph">{datosRuc.nombre}</p>
              <p className="paragraph">{datosRuc.estado}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Ruc;
