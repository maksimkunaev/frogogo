import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './Card.styl';
import Trash from 'assets/svg/icon-cart-trash.svg';
import Counter from 'components/Counter/';

class Card extends PureComponent {

  onIncrease = () => {
    const { id, count } = this.props;
    this.props.changeData(id, { count: count < 0 ? 0 : count + 1 })
  };

  onDecline = () => {
    const { id, count } = this.props;
    this.props.changeData(id, { count: count <= 0 ? 0 : count - 1 });
  };


  render() {
    const { count, id, listItems } = this.props;
    const stuff = listItems[id];
    const { title, modification, discount, minDiscount, price } = stuff;
    const image = require( `assets/images/${stuff.image}`);

    return (
      <div className={styles.card}>
        <div className={styles.header}>
          {title} <Trash  className={styles.trash}/>
          {/*<img src={trash} alt={title} className={styles.trash}/>*/}
        </div>
        <div className={styles.content}>
          <img src={image} alt={title} className={styles.image}/>

          <div>
              {modification.map(({title, Image}) =>
                <div key={title} className={styles.modification}>
                  <span className={styles.title}>{title}</span>
                  <Image />
                </div> )}
            <Counter initialValue={count} onIncrease={this.onIncrease} onDecline={this.onDecline}/>
          </div>
          <div className={styles.details}>

            <div>Полная цена: <span>{price * count}</span></div>
            <div>Можно оплатить с личного счета: <span>{discount}</span></div>
            <div>Минимально к оплате с личного счета: <span>{minDiscount}</span></div>
          </div>
        </div>
      </div>
    );
  }
}
export default container(Card);
