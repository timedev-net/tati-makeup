export const initialState = {
  sidebarShow: 'responsive',
  sidebarUnfoldable: false
}
  
// const sidebarReducer = (state = initialState, { type, ...values }) => {
const sidebarReducer = (state = initialState, action) => {
  // console.log(action.values)
  switch (action.type) {
    case 'SET': return { ...state, ...action.values };
    default: return state
    }
 }

export default sidebarReducer;
 