import { useReducer, useRef, useState } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { consultarRuc } from "../../api/ruc";
import { componetReducer, initialComponent } from "../Reducer/componentReducer";
import CustomInput from "../UI/CustomInput/CustomInput";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Loading from "../UI/Loading/Loading";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import CustomButton from "../UI/CustomButton/CustomButton";

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
              <h2 className="ruc__title">Buscador de ruc&nbsp;(SIFEN)</h2>
              <h3 className="paragraph">
                Obs: Solo se ingresa el ruc sin el digito verificador
              </h3>
            </div>
            <form onSubmit={onSearchRucHandler}>
              <div className="ruc__form--container">
                <CustomInput
                  showLabel={false}
                  inputTitle="Ruc"
                  id="ruc"
                  type="text"
                  name="ruc"
                  margin="normal"
                  required
                  fullWidth
                  label="Buscar Ruc Ej: 4191912"
                  ref={rucInputRef}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => (rucInputRef.current.value = "")}
                        >
                          <CloseIcon />
                        </IconButton>
                        <IconButton onClick={onSearchRucHandler}>
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
          {datosRuc && (
            <div className="u-text-center">
              <h2 className="heading-secondary u-margin-bottom-small">
                Ruc encontrado
              </h2>
              <p className="paragraph">{`RUC: ${datosRuc.ruc} - ${datosRuc.nombre}`}</p>
              <p className="paragraph">{`Estado: ${datosRuc.estado}`}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Ruc;
