

const add_data_index_perfil = (values) => { return { type: 'INDEX_PERFIL', values }}
const show_perfil = values => { return { type: 'SHOW_PERFIL', values };};
const edit_mode_perfil = values => { return { type: 'EDIT_MODE_PERFIL', values };};

export default {
  add_data_index_perfil,
  show_perfil,
  edit_mode_perfil,
};


