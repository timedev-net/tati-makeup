// Estado global (variáveis globais)
export const initialState = {
    index: null,
    show: null,
    edit_mode: null,
    modal_config: false,
    modal_perfis: false,
    modal_users: false,
    modal_destroy: {
      modal: false,
      id: null
    },
    // info_cards: null,
  }
  
   //  sistemasReducer.js
  const sistemasReducer = (state = initialState, action) => {
    switch (action.type) {
 
     case 'INDEX_SISTEMAS': return { ...state, index: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
     case 'ADD_SHOW_SISTEMAS': return { ...state, show: action.values };
     case 'EDIT_MODE_SISTEMAS': return { ...state, edit_mode: action.values };
     case 'MODAL_CONFIG_SISTEMAS': return { ...state, modal_config: action.values };
     case 'MODAL_PERFIS_SISTEMAS': return { ...state, modal_perfis: action.values };
     case 'MODAL_USERS_SISTEMAS': return { ...state, modal_users: action.values };
     case 'MODAL_DESTROY_SISTEMA': return { ...state, modal_destroy: action.values };
    //  case 'ADD_INFO_CARD_SISTEMAS': return { ...state, info_cards: action.values };
     default: return state
     }
 }
  
  
 
  
  export default sistemasReducer;
 