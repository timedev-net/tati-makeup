
export const initialState = {
    index: null,
    solicitacoes: null,
    btn_cadastrar: false,
  }

  const meusSistemasReducer = (state = initialState, action) => {
    switch (action.type) {
 
     case 'INDEX_MEUS_SISTEMAS': return { ...state, index: action.values };
     case 'SOLICITACOES_USER_INDEX': return { ...state, solicitacoes: action.values };
     case 'BTN_CADASTRAR_SOLICITACAO': return { ...state, btn_cadastrar: action.values };
     default: return state
     }
 }
  
  export default meusSistemasReducer;
 