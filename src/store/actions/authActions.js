
const add_dados_auth = (values) => { return { type: 'ADD_DADOS_AUTH', values }}
const add_pessoa_auth = (values) => { return { type: 'ADD_PESSOA_AUTH', values }}
const add_data_token_auth = (values) => { return { type: 'ADD_DATA_TOKEN_AUTH', values }}
const btn_entrar_disabled = (values) => { return { type: 'BTN_ENTRAR_DISABLED', values }}
const remove_dados_auth = () => { return { type: 'REMOVE_DADOS_AUTH' }}
const set_loading = (values) => { return { type: 'SET_LOADING', values }}
const set_is_admin = (values) => { return { type: 'SET_IS_ADMIN_AUTH', values }}


export default {
  add_dados_auth,
  add_pessoa_auth,
  remove_dados_auth,
  btn_entrar_disabled,
  set_loading,
  add_data_token_auth,
  set_is_admin,
};


