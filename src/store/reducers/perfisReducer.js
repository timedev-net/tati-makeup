// Estado global (variáveis globais)
export const initialState = {
    index: null,
    show: null,
    edit_mode: null,
  }
  
   
  const perfisReducer = (state = initialState, action) => {
    switch (action.type) {
 
     case 'INDEX_PERFIL': return { ...state, index: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
     case 'SHOW_PERFIL': return { ...state, show: action.values };
     case 'EDIT_MODE_PERFIL': return { ...state, edit_mode: action.values };
     default: return state
     }
 }
  
  
 
  
  export default perfisReducer;
 