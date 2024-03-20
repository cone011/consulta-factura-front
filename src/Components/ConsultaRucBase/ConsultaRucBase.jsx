import { useReducer, useRef, useState } from "react";
import { componetReducer, initialComponent } from "../Reducer/componentReducer";
import { consultarRucBase } from "../../api/ruc";
import { Box, IconButton, InputAdornment } from "@mui/material";
import ShowComponent from "../UI/ShowComponent/ShowComponent";
import ListaRuc from "../UI/Tabla/ListaRuc";
import CustomInput from "../UI/CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const ConsultaRucBase = () => {
  const rucInputRef = useRef();
  const [listRuc, setListRuc] = useState([]);
  const [state, dispatch] = useReducer(componetReducer, initialComponent);

  const onSearchRucHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch({
        type: "SHOW",
        typeComponent: "loading",
        message: "Buscando Ruc",
      });

      setListRuc(null);

      const enteredRuc = rucInputRef.current.value;

      if (enteredRuc.length < 4) {
        throw new Error("El ruc a buscar debe tener mas de 4 de largo");
      }

      const result = await consultarRucBase(enteredRuc);

      setListRuc(result);

      dispatch({ type: "CLOSE" });
    } catch (err) {
      dispatch({ type: "SHOW", typeComponent: "error", message: err.message });
    }
  };

  return (
    <>
      <div className="consultaRuc">
        <div className="consultaRuc__form">
          <Box>
            <div className="u-text-center">
              <h2 className="consultaRuc__title">
                Buscador de ruc&nbsp;(LOCAL)
              </h2>
              <h2 className="observation">
                OBS: En esta consulta se puede ingresar el RUC, el nombre o
                razon social
              </h2>
            </div>
            <form onSubmit={onSearchRucHandler}>
              <div className="consultaRuc__form--container">
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
          {state.isShow && (
            <ShowComponent
              typeComponent={state.typeComponent}
              message={state.message}
            />
          )}
        </div>
      </div>

      {!state.isShow && listRuc.length > 0 && (
        <div className="consultaRuc">
          <div className="consultaRuc_result">
            <ListaRuc listaRuc={listRuc} />
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultaRucBase;
