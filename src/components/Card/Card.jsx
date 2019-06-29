import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './Card.styl';
import Trash from 'assets/svg/icon-cart-trash.svg';
import Counter from 'components/Counter/';
import IconText from 'components/IconText/'
import goldStatus from 'assets/png/icon-gold@2x.png';

class Card extends PureComponent {
  onIncrease = () => {
    const { id, count } = this.props;
    this.props.changeData(id, { count: count < 0 ? 0 : count + 1 })
  };

  onDecline = () => {
    const { id, count } = this.props;
    this.props.changeData(id, { count: count <= 0 ? 0 : count - 1 });
  };

  onDelete = id => {
    this.props.deleteProduct(id);
  };

  renderModification() {
    const { count, id, listItems } = this.props;
    const stuff = listItems[id];
    const { modification } = stuff;

    return (
      <div className={styles.middle}>
        {modification.map(({title, image}) =>
          <div key={title} className={styles.modification}>
            <span className={styles.title}>{title}</span>
            <img src={image} alt="" className={styles.modImage}/>
          </div> )}
        <Counter initialValue={count} onIncrease={this.onIncrease} onDecline={this.onDecline}/>
      </div>
    )
  }

  renderDetails() {
    const { count, id, listItems } = this.props;
    const stuff = listItems[id];
    const { discount, minDiscount, price } = stuff;

    return (
      <div className={styles.details}>
        <div className={styles.price}>Полная цена: <span className={styles.amount}>{price * count}</span></div>
        <div className={styles.discount}>Можно оплатить с личного счета: <span className={styles.amount}>{discount}</span></div>
        <div
          className={styles.minDiscount}
          style={{visibility: minDiscount ? 'visible' : 'hidden'}}
        >Минимально к оплате с личного счета: <span className={styles.amount}>{minDiscount}</span></div>
      </div>
    )
  }

  renderGift() {
    return (
      <div className={styles.gift}>
        Подарок от &nbsp; <IconText text='Gold статуса' className={styles.icon} icon={goldStatus} />
      </div>
    )
  }

  render() {
    const { id, listItems, status } = this.props;
    const stuff = listItems[id];
    const { title } = stuff;
    const image = require( `assets/images/${stuff.image}`);
    const isGift = status === 'gift';

    return (
      <div className={styles.card}>
        <div className={styles.header}>
          {title} <Trash  className={styles.trash} onClick={() => this.onDelete(id)}/>
        </div>
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <img src={image} alt={title} className={styles.image}/>
            { !isGift && this.renderModification()}
          </div>
          { !isGift && this.renderDetails()}
          { status === 'gift' && this.renderGift()}
        </div>
      </div>
    );
  }
}
export default container(Card);
