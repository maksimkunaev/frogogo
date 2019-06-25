import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './Card.styl';
import trash from 'assets/svg/icon-cart-trash.svg';
import { Badge, Button, Icon, Switch } from 'antd';

const ButtonGroup = Button.Group;

class Card extends PureComponent {
  state = {
    count: 5,
    show: true,
  };

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };


  render() {
    const { count, id, listItems } = this.props;
    const stuff = listItems[id];
    const { title, modification } = stuff;
    const image = require( `assets/images/${stuff.image}`);

    console.log(stuff)
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          {title} <img src={trash} alt={title} className={styles.trash}/>
        </div>
        <div className={styles.content}>
          <img src={image} alt={title} className={styles.image}/>

          <div className={styles.modification}>
            <div>
              {modification.map(({title, value}) => <div>{title} {value} </div> )}

            </div>

            <div className={styles.counter}>
              <Button onClick={this.decline}>
                <Icon type="minus" />
              </Button>
              <p className={styles.amount}>{this.state.count}</p>
              <Button onClick={this.increase}>
                <Icon type="plus" />
              </Button>
            </div>

          </div>

          <div className={styles.details}>
            details
          </div>

        </div>
      </div>
    );
  }
}
export default container(Card);
