// Estado global (variáveis globais)
export const initialState = {
  toasts: [],
  
  }
  
   
  const notifyBoxReducer = (state = initialState, action) => {
    switch (action.type) {
 
     case 'NOTIFY_BOX': return { toasts: [...state.toasts, action.values] }
     
     default: return state
     }
 }
  
  
 
  
  export default notifyBoxReducer;
 