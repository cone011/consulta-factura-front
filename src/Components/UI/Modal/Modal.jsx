import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { TYPE_MODAL } from "../../../../utils/const";
import CustomButton from "../CustomButton/CustomButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

const Modal = ({ onConfirm, onClose, typeModal, message }) => {
  if (typeModal === TYPE_MODAL.ERROR) {
    return (
      <Dialog open={true} onClose={onClose} maxWidth="lg">
        <DialogContent>
          <div style={{ width: "55rem", height: "9rem" }}>
            <ErrorMessage message={message} />
          </div>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "center", marginBottom: "3rem" }}
        >
          <CustomButton onClick={onClose}>Cerrar</CustomButton>
        </DialogActions>
      </Dialog>
    );
  }

  if (typeModal === TYPE_MODAL.LOADING) {
    return (
      <Dialog open={true} maxWidth="lg">
        <DialogContent>
          <Loading message={message} />
        </DialogContent>
      </Dialog>
    );
  }

  if (typeModal === TYPE_MODAL.CONFIRM) {
    return (
      <Dialog open={true} onClose={onClose} maxWidth="lg">
        <DialogContent>
          <div style={{ width: "60rem", height: "9rem" }}>
            <div className="u-text-center">
              <h2 className="heading-secondary">{message}</h2>
            </div>
          </div>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "center", marginBottom: "3rem" }}
        >
          <CustomButton onClick={onConfirm}>Aceptar</CustomButton>
        </DialogActions>
      </Dialog>
    );
  }
};

export default Modal;
