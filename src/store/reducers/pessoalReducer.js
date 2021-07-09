// Estado global (variáveis globais)
export const initialState = {
    index: null,
    show: null,
    edit_mode: false,
    modal_mode: false
  }
  
   
  const pessoalReducer = (state = initialState, action) => {
    switch (action.type) {
 
     case 'ADD_INDEX_PESSOAL': return { ...state, index: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
     case 'ADD_SHOW_PESSOAL': return { ...state, show: action.values };
     case 'EDIT_MODE_PESSOAL': return { ...state, edit_mode: action.values };
     case 'MODAL_MODE_PESSOAL': return { ...state, modal_mode: action.values };
     default: return state
     }
 }
  
  
 
  
  export default pessoalReducer;
 