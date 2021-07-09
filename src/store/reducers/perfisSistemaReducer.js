// Estado global (variáveis globais)
export const initialState = {
    index: null,
    show: null,
    edit_mode: null,
  }
  
   
  const perfisSistemaReducer = (state = initialState, action) => {
    switch (action.type) {
 
     case 'INDEX_PERFIL_SISTEMA': return { ...state, index: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
     case 'SHOW_PERFIL_SISTEMA': return { ...state, show: action.values };
     case 'EDIT_MODE_PERFIL_SISTEMA': return { ...state, edit_mode: action.values };
     default: return state
     }
 }
  
  
 
  
  export default perfisSistemaReducer;
 