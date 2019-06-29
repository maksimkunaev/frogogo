import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './TotalCost.styl';
import { bind } from 'decko';
import IconText from 'components/IconText/'
import goldStatus from 'assets/png/icon-gold@2x.png';

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

    const totalDeliveryCost = summ < minPrice ? deliveryCost : <span className={styles.freeDelivery}>Бесплатно</span>;;
    const totalCost = summ - useDiscount;

    return (
      <section className={styles.totalCost}>
        <div className={styles.content}>
          <div className={styles.delivery}>
            <div>Доставка</div>
            <div className={styles.amount}>{totalDeliveryCost}</div>
          </div>
          <div className={styles.discount}>
            <div>Итоговая стоймость</div>
            <div className={styles.amount}>{totalCost}</div>
          </div>

          <div className={styles.goldStatus}>
            <div className={styles.title}>+ 20% на личный счет от &nbsp; <IconText text='Gold статуса' className={styles.icon} icon={goldStatus} /></div>
            <div className={styles.amount}>
              {Math.round(0.2 * totalCost)}
            </div>
          </div>

          <div className={styles.refund}>
            <div>На личный счет вернется</div>
            <div className={styles.amount}>{Math.round(1.2 * totalCost)}</div>
          </div>
        </div>

        <button className={styles.buyButton}>Перейти к оформлению заказа</button>
      </section>
    );
  }
}

export default container(TotalCost);
