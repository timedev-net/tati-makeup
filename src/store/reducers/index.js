import { combineReducers } from 'redux';
import authReducer from './authReducer'
import sidebarReducer from './sidebarReducer'
import sistemasReducer from './sistemasReducer'
import meusSistemasReducer from './meusSistemasReducer'
import perfisReducer from './perfisReducer'
import usuariosReducer from './usuariosReducer'
import pessoalReducer from './pessoalReducer'
import notifyBoxReducer from './notifyBoxReducer'



export default combineReducers({
    authReducer,
    sidebarReducer,
    sistemasReducer,
    perfisReducer,
    usuariosReducer,
    pessoalReducer,
    meusSistemasReducer,
    notifyBoxReducer,
})
