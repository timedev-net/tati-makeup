
const add_dados_index_sistemas = (values) => { return { type: 'INDEX_MEUS_SISTEMAS', values }}
const solicitacoes_user_index = values => { return { type: 'SOLICITACOES_USER_INDEX', values };};
const btn_cadastrar = values => { return { type: 'BTN_CADASTRAR_SOLICITACAO', values };};


export default {
  add_dados_index_sistemas,
  solicitacoes_user_index,
  btn_cadastrar,
};
