import React, { Component } from 'react';
import styles from './Select.styl';
import { Menu, Dropdown, Icon } from 'antd';
import  { bind } from 'decko';
import container from "components/container";

class Select extends Component {
  constructor(props) {
    super(props);
    const { items } = props;

    this.state = {
      activeItem: items[0].key,
      menuItems: items
    }
  }

  @bind
  onClick({ item }) {
    this.setState({
      activeItem: item.props.eventKey
    })
  }

  renderMenu() {
    const { menuItems } = this.state;
    return (
      <Menu >
        {menuItems.map((value, idx) =><Menu.Item key={value.key || idx} onClick={this.onClick}>
          {value.component}
        </Menu.Item>)}
      </Menu>
    )
  }

  render() {
    const { activeItem } = this.state;
    const { color } = this.props;

    return (
      <div className={styles.select}>
        <Dropdown overlay={this.renderMenu()} className={styles.dropdown}>
        <span className={styles.text} style={{color: color}}>
          {activeItem} <Icon type="caret-down" className={styles.icon} style={{color: color}}/>
        </span>
        </Dropdown>
      </div>
    );
  }
}

export default container(Select);
