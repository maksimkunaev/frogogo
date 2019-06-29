import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './TotalCost.styl';
import { bind } from 'decko';
import IconText from 'components/IconText/'
import goldStatus from 'assets/png/icon-gold@2x.png';
import cn from 'classnames';

class TotalCost extends PureComponent {
  @bind
  tipFormatter(value) {
  }

  render() {
    const { basketItems, listItems, delivery:  { minPrice, deliveryCost }  } = this.props.data;
    const summ = basketItems.reduce((acc, current) => {
      return acc + listItems[current.id].price * current.count
    }, 0);
    const { useDiscount } = this.props.data;
    const productsNumber = basketItems.filter(product => product.status !== 'gift');
    const isDisabled = !productsNumber.length;
    const totalDeliveryCost = summ < minPrice ? deliveryCost : <span className={styles.freeDelivery}>Бесплатно</span>;;
    const totalCost = summ - useDiscount;
    const plusTwentyPercent = Math.round(0.2 * totalCost);
    const refund = Math.round(1.2 * totalCost);

    return (
      <section className={styles.totalCost}>
        <div className={styles.content}>
          <div className={styles.delivery}>
            <div>Доставка</div>
            <div className={styles.amount}>{totalDeliveryCost}</div>
          </div>
          <div className={styles.discount}>
            <div>Итоговая стоймость</div>
            <div className={styles.amount}>{totalCost < 0 ? 0 : totalCost}</div>
          </div>

          <div className={styles.goldStatus}>
            <div className={styles.title}>+ 20% на личный счет от &nbsp; <IconText text='Gold статуса' className={styles.icon} icon={goldStatus} /></div>
            <div className={styles.amount}>
              {plusTwentyPercent < 0 ? 0 : plusTwentyPercent}
            </div>
          </div>

          <div className={styles.refund}>
            <div>На личный счет вернется</div>
            <div className={styles.amount}>{refund < 0 ? 0 : refund}</div>
          </div>
        </div>

        <button className={cn(styles.buyButton, isDisabled && styles.disabled)} disabled={isDisabled}>Перейти к оформлению заказа</button>
      </section>
    );
  }
}

export default container(TotalCost);
