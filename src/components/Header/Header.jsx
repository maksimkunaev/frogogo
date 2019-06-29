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
import FrogoLogo from 'assets/svg/logo-frogogo-header.svg';
import BasketLogo from 'assets/svg/icon-cart-header.svg';
import Media from 'react-media';

const breakPoint = {
  tablet: 840,
  mobile: 590,
}

class Header extends Component {
  render() {
    const { balance, basketItems } = this.props.data;
    const productsNumber = basketItems.filter(product => product.status !== 'gift');

    return (
        <header className={styles.header}>
          <Content>
            <section className={styles.topLine}>
              <Media query={`(max-width: ${breakPoint.mobile}px)`}>
                {matches =>
                  matches && <span className={styles.logo}><FrogoLogo /></span>
                }
              </Media>

              <div className={styles.region}>
                <IconText text='Регион:' className={styles.promoCode} icon={region} />
                <Select items={ [
                  { component: 'Москва', key: 'Москва' },
                  { component: 'Санкт Петербрг', key: 'Санкт Петербрг' },
                  { component: 'Новгород', key: 'Новгород' }]}/>
              </div>

              <div className={styles.identity}>
                <IconText text='Ввести промокод' className={styles.promoCode} icon={promoCode} />
                <IconText text='GOLD статус' className={styles.status} icon={goldStatus} />
                <div className={styles.balance}>Ваш счет
                  <Select items={ [
                    { component: `${balance} ₽`, key: `${balance} ₽` }] }/>
                </div>
              </div>
            </section>

            <section className={styles.bottomLine}>
              <Media query={`(max-width: ${breakPoint.mobile}px)`}>
                {matches =>
                  !matches && <FrogoLogo />
                }
              </Media>
              <Media query={`(max-width: ${breakPoint.tablet}px)`}>
                {matches =>
                  matches ? (
                    <Navigation position='vertical' className={styles.navigation}/>
                  ) : (
                    <Navigation />
                  )
                }
              </Media>

              <Basket productsNumber={productsNumber.length}/>
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
        <BasketLogo />
        <div className={styles.basketCount}>{this.props.productsNumber}</div>
      </div>
    );
  }
}

export default container(Header);
