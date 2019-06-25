import React, { PureComponent } from 'react';
import styles from './Navigation.styl';
import Select from 'components/Select/'

const menuList = [
  {
    text: <Select items={ ['Категории']} color='#8f98a6'/>,
    link: '#',
  },
  {
    text: 'Коллекции',
    link: '#',
  },
  {
    text: 'Вопрос / Ответ',
    link: '#',
  },
  {
    text: 'Как пополнить счет?',
    link: '#',
  },
  {
    text: 'Поддержка',
    link: '#',
  }
]
export default class Navigation extends PureComponent {
  render() {
    return (
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {menuList.map(item => <MenuItem {...item}  key={item.text}/>)}
        </ul>
      </nav>
    );
  }
}

class MenuItem extends PureComponent {
  render() {
    const { text, link } = this.props;

    return (
          <li ><a href={link} className={styles.menuItem}>{text}</a></li>
    );
  }
}
