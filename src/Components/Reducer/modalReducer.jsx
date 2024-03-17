export const initialModal = {
  isShow: false,
  typeModal: null,
  message: null,
  data: null,
};

export const modalReducer = (state, action) => {
  if (action.type === "SHOW") {
    return {
      ...state,
      isShow: true,
      typeModal: action.typeModal,
      message: action.message,
      data: action.data,
    };
  }

  if (action.type === "CLOSE") {
    return {
      ...state,
      isShow: false,
    };
  }
};
