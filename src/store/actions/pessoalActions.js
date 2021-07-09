
const add_data_index_pessoal = (values) => { return { type: 'ADD_INDEX_PESSOAL', values }}
const add_data_show_pessoal = values => { return { type: 'ADD_SHOW_PESSOAL', values };};
const edit_mode_pessoal = values => { return { type: 'EDIT_MODE_PESSOAL', values };};
const modal_mode_pessoal = values => { return { type: 'MODAL_MODE_PESSOAL', values };};

export default {
  add_data_index_pessoal,
  add_data_show_pessoal,
  edit_mode_pessoal,
  modal_mode_pessoal,
};


