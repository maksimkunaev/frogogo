import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    data: state.data,
})

const mapDispatchToProps = dispatch => ({
  changeData: (id, data) => {
    dispatch({
      type: 'changeData',
      data,
      id,
    })
  },
  emptyTrash: (id, data) => {
    dispatch({
      type: 'emptyTrash',
      data,
      id,
    })
  },
})

export default component => connect(mapStateToProps, mapDispatchToProps)(component);
