import React from 'react';
import styles from './IconText.styl';
import cn from 'classnames';

const Item = ({ className, text, icon, width }) => {
  return <div className={cn(styles.iconItem, className)}>
    <img src={icon} alt="" className={styles.icon} style={{width}} />
    <div>{text}</div>
  </div>
}

export default Item;
