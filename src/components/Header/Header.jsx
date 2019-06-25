import React, { PureComponent, Component } from 'react';
import styles from './Header.styl';
import Navigation from 'components/Navigation/';
import Content from 'components/Content/';
import container from "components/container";
import IconText from 'components/IconText/';
import Select from 'components/Select/';
import region from 'assets/png/icon-location-header@2x.png';
import promoCode from 'assets/png/icon-addpromocod-header@2x.png';
import goldStatus from 'assets/png/icon-gold-header@2x.png';
import frogoLogo from 'assets/svg/logo-frogogo-header.svg';
import basket from 'assets/svg/icon-cart-header.svg';

class Header extends Component {
  render() {
    const { balance } = this.props.data;

    return (
        <header className={styles.header}>
          <Content>
            <section className={styles.topLine}>
              <div className={styles.region}>
                <IconText text='Регион:' className={styles.promoCode} icon={region} />

                <Select items={ [ 'Москва', 'Санкт Петербрг', 'Новгород']}/>
              </div>

              <div className={styles.identity}>
                <IconText text='Ввести промокод' className={styles.promoCode} icon={promoCode} />
                <IconText text='GOLD статус' className={styles.status} icon={goldStatus} />
                <div className={styles.balance}>Ваш счет
                  <Select items={ [ `${balance} ₽`]}/>
                </div>
              </div>
            </section>

            <section className={styles.bottomLine}>
              <img src={frogoLogo} alt="logo" height='30px'/>
              <Navigation />
              <Basket />
            </section>
          </Content>

        </header>
    );
  }
}

class Basket extends PureComponent {
  render() {
    return (
      <div className={styles.basket}>
        <IconText text='Корзина' className={styles.promoCode} icon={basket} width={20}/>
      </div>
    );
  }
}

export default container(Header);
