// Estado global (variáveis globais)
export const initialState = {
    index: null,
    show: null,
    edit_mode: false,
    modal_mode: false
  }
  
   
  const usuariosReducer = (state = initialState, action) => {
    switch (action.type) {
 
     case 'ADD_INDEX_USUARIOS': return { ...state, index: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
     case 'ADD_SHOW_USUARIOS': return { ...state, show: action.values };
     case 'EDIT_MODE_USUARIOS': return { ...state, edit_mode: action.values };
     case 'MODAL_MODE_USUARIOS': return { ...state, modal_mode: action.values };
     default: return state
     }
 }
  
  
 
  
  export default usuariosReducer;
 