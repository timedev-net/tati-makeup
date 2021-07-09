
const add_data_index = (values) => { return { type: 'INDEX_PERFIL_SISTEMA', values }}
const show = values => { return { type: 'SHOW_PERFIL_SISTEMA', values };};
const edit_mode = values => { return { type: 'EDIT_MODE_PERFIL_SISTEMA', values };};

export default {
  add_data_index,
  show,
  edit_mode,
};


