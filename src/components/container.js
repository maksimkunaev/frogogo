import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    data: state.data,
})

const mapDispatchToProps = dispatch => ({
  changeData: (data) => {
    dispatch({
      type: 'changeBotsOrder',
      data,
    })
  },
})

export default component => connect(mapStateToProps, mapDispatchToProps)(component);
