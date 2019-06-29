import React from 'react';
import styles from './IconText.styl';
import cn from 'classnames';
import Media from 'react-media';

const Item = ({ className, text, icon, width }) => {
  return <div className={cn(styles.iconItem, className)}>
    <Media query="(max-width: 840px)">
      {matches =>
        matches ? (
          <div>{text}</div>
        ) : (
          <>
            <img src={icon} alt="" className={styles.icon} style={{width}} />
            <div>{text}</div>
          </>
        )
      }
    </Media>

  </div>
}

export default Item;
