const initialState = {
  isLogged: false,
  profile: {},
  signUp: {
    name: '',
    email: '',
    errorMessage: '',
  },
};

function RootReducer(state: any = initialState, action: any) {
  if (action.type === 'APP_INIT_SUCCESS') {
    return {...state, isLogged: true, profile: action.payload.profile};
  }
  console.log('action:', action);
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        signUp: {...state.signUp, email: action.payload},
      };
    case 'SET_NAME':
      return {
        ...state,
        signUp: {...state.signUp, name: action.payload},
      };
    default:
      break;
  }

  return state;
}

export default RootReducer;
