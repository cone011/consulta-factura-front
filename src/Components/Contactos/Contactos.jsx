import { useReducer, useRef } from "react";
import { insertContacto } from "../../api/contacto";
import { TYPE_MODAL } from "../../../utils/const";
import { initialModal, modalReducer } from "../Reducer/modalReducer";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import CustomInput from "../UI/CustomInput/CustomInput";

const Contactos = () => {
  const nombreInputRef = useRef();
  const telefonoInputRef = useRef();
  const emailInputRef = useRef();
  const mensajeInputRef = useRef();
  const [state, dispatch] = useReducer(modalReducer, initialModal);
  const navigate = useNavigate();

  const onSubmitContactoHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch({
        type: "SHOW",
        typeModal: TYPE_MODAL.LOADING,
        message: "Guardando",
      });

      const enteredNombre = nombreInputRef.current.value;
      const enteredTelefono = telefonoInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredMensaje = mensajeInputRef.current.value;

      await insertContacto({
        nombre: enteredNombre,
        telefono: enteredTelefono,
        email: enteredEmail,
        mensaje: enteredMensaje,
      });

      dispatch({
        type: "SHOW",
        typeModal: TYPE_MODAL.CONFIRM,
        message:
          "Se guardo correctamente, el transcurso del dia alguien se va a comunicar con usted",
      });
    } catch (err) {
      dispatch({
        type: "SHOW",
        typeModal: TYPE_MODAL.ERROR,
        message: err.message,
      });
    }
  };

  const onConfirmModal = () => {
    navigate("/");
  };

  const onCloseModal = () => {
    dispatch({ type: "CLOSE" });
  };

  return (
    <>
      {state.isShow && (
        <Modal
          typeModal={state.typeModal}
          onClose={onCloseModal}
          message={state.message}
          onConfirm={onConfirmModal}
        />
      )}
      <div className="contacto">
        <div className="contacto_form">
          <form onSubmit={onSubmitContactoHandler}>
            <div className="u-text-center">
              <h2 className="factura__title">
                Buscador de Factura Electronica&nbsp;(SIFEN)
              </h2>
            </div>
            <label htmlFor="nombre" className="label">
              Nombre *
            </label>
            <CustomInput
              showLabel={false}
              inputTitle="Nombre"
              id="nombre"
              type="text"
              name="nombre"
              margin="normal"
              required
              fullWidth
              label="Nombre"
              ref={nombreInputRef}
              fontSize="1.5rem"
            />
            <div className="contacto_form-contacts">
              <div>
                <label htmlFor="telefono" className="label">
                  Telefono *
                </label>
                <CustomInput
                  showLabel={false}
                  inputTitle="Telefono"
                  id="telefono"
                  type="text"
                  name="Telefono"
                  margin="normal"
                  required
                  fullWidth
                  label="Telefono"
                  ref={telefonoInputRef}
                  fontSize="1.5rem"
                />
              </div>
              <div>
                <label htmlFor="correo" className="label">
                  Correo
                </label>
                <CustomInput
                  showLabel={false}
                  inputTitle="Correo"
                  id="correo"
                  type="email"
                  name="correo"
                  margin="normal"
                  required
                  fullWidth
                  label="Correo"
                  ref={emailInputRef}
                  fontSize="1.5rem"
                />
              </div>
            </div>
            <label htmlFor="mensaje" className="label">
              Mensaje
            </label>
            <CustomInput
              showLabel={false}
              inputTitle="Mensaje"
              id="mensaje"
              type="text"
              name="mensaje"
              margin="normal"
              required
              fullWidth
              label="Mensaje"
              ref={mensajeInputRef}
              multiline
              rows={4}
              maxRows={4}
              fontSize="1.5rem"
            />
            <div className="contacto_form-btn">
              <button className="btn">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactos;
