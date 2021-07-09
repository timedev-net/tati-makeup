
const add_dados_index_sistemas = (values) => { return { type: 'INDEX_SISTEMAS', values }}
const edit_mode_sistemas = values => { return { type: 'EDIT_MODE_SISTEMAS', values };};
const add_data_show_sistemas = values => { return { type: 'ADD_SHOW_SISTEMAS', values };};
const modal_config_sistemas = values => { return { type: 'MODAL_CONFIG_SISTEMAS', values };};
const modal_perfis_sistemas = values => { return { type: 'MODAL_PERFIS_SISTEMAS', values };};
const modal_users_sistemas = values => { return { type: 'MODAL_USERS_SISTEMAS', values };};
const modal_destroy_sistema = values => { return { type: 'MODAL_DESTROY_SISTEMA', values };};

export default {
  edit_mode_sistemas,
  add_dados_index_sistemas,
  modal_config_sistemas,
  modal_perfis_sistemas,
  modal_users_sistemas,
  modal_destroy_sistema,
  add_data_show_sistemas,
};


