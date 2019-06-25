import React, { PureComponent } from 'react';
import Content from 'components/Content/';
import container from "components/container";
import styles from './Main.styl';
import Card from 'components/Card/';

class Main extends PureComponent {
  render() {
    const { basketItems, listItems } = this.props.data;

    return (
      <main>
        <Content>
          {basketItems.map(item => <Card { ...item } listItems={listItems} key={item.id}/>)}
        </Content>
      </main>
    );
  }
}

export default container(Main);
