// Estado global (variáveis globais)
export const initialState = {
  auth: null,
  pessoa: null,
  permissoes: null,
  is_admin: false,
  btn_entrar_disabled: false,
  isLoading: true,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_DADOS_AUTH': return { ...state,
      auth: action.values.auth,
      pessoa: action.values.pessoa,
      permissoes: action.values.permissoes };
    case 'ADD_PESSOA_AUTH': return { ...state,
      pessoa: action.values.pessoa,
      permissoes: action.values.permissoes,
     };
    case 'BTN_ENTRAR_DISABLED': return { ...state, btn_entrar_disabled: action.values };
    case 'REMOVE_DADOS_AUTH': return { ...state, auth: null, pessoa: null, permissoes: null };
    case 'SET_LOADING': return { ...state, isLoading: action.values };
    case 'ADD_DATA_TOKEN_AUTH': return { ...state, auth: action.values };
    case 'SET_IS_ADMIN_AUTH': return { ...state, is_admin: action.values };
    default: return state
  }
}

export default authReducer;
