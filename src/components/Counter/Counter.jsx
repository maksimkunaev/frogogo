import React, { PureComponent } from 'react';
import container from "components/container";
import styles from './Counter.styl';
import { Button, Icon } from 'antd';

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialValue || 0,
      show: true,
    };
  }

  increase = () => {
    const { onIncrease } = this.props;
    const count = this.state.count + 1;

    this.setState({ count });
    onIncrease();
  };

  decline = () => {
    const { onDecline } = this.props;
    let count = this.state.count - 1;

    if (count < 0) {
      count = 0;
    }

    this.setState({ count });
    onDecline();
  };


  render() {
    const { count } = this.state;

    return (
      <div className={styles.counter}>
        <button onClick={this.decline}>
          <Icon type="minus" />
        </button>
        <p className={styles.amount}>{count}</p>
        <button onClick={this.increase}>
          <Icon type="plus" />
        </button>
      </div>
    );
  }
}
export default container(Counter);
