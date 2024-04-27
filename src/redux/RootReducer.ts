const initialState = {
  isLogged: false,
  profile: {},
};

function RootReducer(state: any = initialState, action: any) {
  if (action.type === 'APP_INIT_SUCCESS') {
    return {...state, isLogged: true, profile: action.payload.profile};
  }

  return state;
}

export default RootReducer;
