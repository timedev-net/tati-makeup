
const add_data_index_usuarios = (values) => { return { type: 'ADD_INDEX_USUARIOS', values }}
const add_data_show_usuarios = values => { return { type: 'ADD_SHOW_USUARIOS', values };};
const edit_mode_usuarios = values => { return { type: 'EDIT_MODE_USUARIOS', values };};
const modal_mode_usuarios = values => { return { type: 'MODAL_MODE_USUARIOS', values };};

export default {
  add_data_index_usuarios,
  add_data_show_usuarios,
  edit_mode_usuarios,
  modal_mode_usuarios,
};


