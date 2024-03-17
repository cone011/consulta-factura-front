import { useRef } from "react";

const NotificacionForm = () => {
  const nombreInputRef = useRef();
  const telefonoInputRef = useRef();
  const emailInputRef = useRef();
  const mensajeInputRef = useRef();

  const onSubmitNotificacionHandler = async (event) => {
    event.preventDefault();
    try {
      const enteredNombre = nombreInputRef.current.value;
      const enteredTelefono = telefonoInputRef.current.value;
      const enteredEmail = emailInputRef.current.value;
      const enteredMensaje = mensajeInputRef.current.value;
    } catch (err) {}
  };
};

export default NotificacionForm;
