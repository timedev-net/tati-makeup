
export const initialState = {
    routes: null,
    redirect: null,
  }

  const routesReducer = (state = initialState, action) => {
    switch (action.type) {
 
     case 'ADD_ROUTES': return { ...state, routes: action.values };
     case 'ADD_REDIRECT': return { ...state, redirect: action.values };
     default: return state
     }
 }
  
  export default routesReducer;
 