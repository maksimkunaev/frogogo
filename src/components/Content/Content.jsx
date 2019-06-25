import React, { Component } from 'react';
import styles from './Content.styl';

export default class Content extends Component {
  render() {
    return (
       <div className={styles.content}>
         {this.props.children}
       </div>
    );
  }
}
