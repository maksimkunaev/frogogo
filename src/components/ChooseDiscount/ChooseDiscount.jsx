import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './ChooseDiscount.styl';
import { Slider, Switch } from 'antd';
import { bind } from 'decko';

class ChooseDiscount extends PureComponent {

  renderMarks()  {
    const { balance } = this.props.data;
    return {
      0: {
        style: {
          left: 8,
          color: '#d4d4d4',
          top: -45,
          width: 200,
          whiteSpace: 'nowrap',
          fontWeight: 700,
          fontSize: 18,
        },
        label: <strong>0 ₽</strong>,
      },
      [`${balance}`]: {
        style: {
          color: '#d4d4d4',
          top: -45,
          width: 200,
          whiteSpace: 'nowrap',
          fontWeight: 700,
          fontSize: 18,
        },
        label: <div>{balance} ₽</div>,
      },
    }
  };

  @bind
  onChange(value) {
    this.props.changeDiscount(this.tipFormatter(value));
  }


  @bind
  tipFormatter(value) {
    return value > 1000 ? 1000 : value;
  }

  render() {
    const { basketItems, listItems } = this.props.data;
    const summ = basketItems.reduce((acc, current) => {
      return acc + listItems[current.id].price * current.count
    }, 0);
    const { balance, useDiscount } = this.props.data;

    const productsNumber = basketItems.filter(product => product.status !== 'gift');

    return (
      <section className={styles.chooseDiscount}>
        <div className={styles.products}>
          <div>{productsNumber.length} товара на сумму</div>
          <div className={styles.amount}>{summ}</div>
        </div>
        <div className={styles.discount}>
          <div>Используется с личного счета</div>
          <div className={styles.amount}>{useDiscount}</div>
        </div>
        <div className={styles.description}>
          Передвигая лягушку, выберете сколько рублей с личного счета вы хотите потратить
        </div>
        <Slider  tipFormatter={this.tipFormatter} max={balance} defaultValue={0} className={styles.slider} marks={this.renderMarks()} onChange={this.onChange}/>
      </section>
    );
  }
}

export default container(ChooseDiscount);
