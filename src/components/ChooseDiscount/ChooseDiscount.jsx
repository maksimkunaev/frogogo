import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './ChooseDiscount.styl';
import { Slider, Switch } from 'antd';


class ChooseDiscount extends PureComponent {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };


  renderMarks()  {
    const { balance } = this.props.data;
    return {
      0: {
        style: {
          left: 8,
          color: '#c1c1c1',
          top: -42,
          width: 200,
          whiteSpace: 'nowrap',
          fontWeight: 700,
          fontSize: 20,
        },
        label: <strong>0 ₽</strong>,
      },
      [`${balance}`]: {
        style: {
          color: '#c1c1c1',
          top: -42,
          width: 200,
          whiteSpace: 'nowrap',
          fontWeight: 700,
          fontSize: 20,
        },
        label: <div>{balance} ₽</div>,
      },
    }
  };

  render() {
    const { basketItems, listItems } = this.props.data;
    const summ = basketItems.reduce((acc, current) => {
      return acc + listItems[current.id].price * current.count
    }, 0);
    const { balance, useDiscount } = this.props.data;

    const { disabled } = this.state;
    return (
      <section className={styles.chooseDiscount}>
        <div className={styles.products}>
          <div>3 товара на сумму</div>
          <div className={styles.amount}>{summ}</div>
        </div>
        <div className={styles.discount}>
          <div>Используется с личного счета</div>
          <div className={styles.amount}>{useDiscount}</div>
        </div>
        <div className={styles.description}>
          Передвигая лягушку, выберете сколько рублей с личного счета вы хотите потратить
        </div>
        <Slider  max={balance} defaultValue={0} disabled={disabled} className={styles.slider} marks={this.renderMarks()}/>
        {/*<Slider />*/}
      </section>
    );
  }
}

export default container(ChooseDiscount);
