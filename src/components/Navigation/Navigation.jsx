import React, { PureComponent } from 'react';
import styles from './Navigation.styl';
import Select from 'components/Select/'

const menuList = [
  {
    component: <Select items={ [ { component: 'Категории', key: 'Категории' }]} color='#8f98a6'/>,
    key: 'Категории',
    link: '#',
  },
  {
    component: 'Коллекции',
    key: 'Коллекции',
    link: '#',
  },
  {
    component: 'Вопрос / Ответ',
    key: 'Вопрос / Ответ',
    link: '#',
  },
  {
    component: 'Как пополнить счет?',
    key: 'Как пополнить счет?',
    link: '#',
  },
  {
    component: 'Поддержка',
    key: 'Поддержка',
    link: '#',
  }
]
export default class Navigation extends PureComponent {
  render() {
    const isVertical = this.props.position === 'vertical';

    return (
      <nav className={this.props.className}>
        { isVertical && <Select items={ menuList }/> }
        { !isVertical &&
          <ul className={styles.list}>
            {menuList.map(item => <MenuItem {...item}  key={item.key}/>)}
          </ul>
        }
      </nav>
    );
  }
}

class MenuItem extends PureComponent {
  render() {
    const { component, link } = this.props;

    return (
        <li ><a href={link} className={styles.menuItem}>{component}</a></li>
    );
  }
}
