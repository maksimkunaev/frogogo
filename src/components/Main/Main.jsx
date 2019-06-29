import React, { PureComponent } from 'react';
import Content from 'components/Content/';
import container from "components/container";
import styles from './Main.styl';
import Card from 'components/Card/';
import ChooseDiscount from 'components/ChooseDiscount/';
import TotalCost from 'components/TotalCost/'

class Main extends PureComponent {
  render() {
    const { basketItems, listItems } = this.props.data;

    return (
      <main>
        <Content>
          <div className={styles.description}>
            <span className={styles.title}>Вот что в Вашей корзине</span>
            <button className={styles.reset} onClick={this.props.emptyTrash}>Очистить корзину</button>
          </div>
          {basketItems.map(item => <Card { ...item } listItems={listItems} key={item.id}/>)}
          <ChooseDiscount />
          <TotalCost />
        </Content>
      </main>
    );
  }
}

export default container(Main);
