export const initialComponent = {
  isShow: false,
  typeComponent: null,
  message: null,
};

export const componetReducer = (state, action) => {
  if (action.type === "SHOW") {
    return {
      ...state,
      isShow: true,
      typeComponent: action.typeComponent,
      message: action.message,
    };
  }

  if (action.type === "CLOSE") {
    return {
      ...state,
      isShow: false,
    };
  }
};
