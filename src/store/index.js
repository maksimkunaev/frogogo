import { combineReducers } from 'redux';
import Product01 from 'assets/svg/icon-color-product-01.svg';

const listItems = {
    1: {
        title: 'Стакан YPSILON BRIO CAPPUCCINO 220мл',
        image: 'img-product-cart-01@2x.jpg',
        modification: [{ title: 'Цвет',  Image: Product01 }] ,
        price: 3580,
        id: 1,
        discount: 2000,
        minDiscount: 2000,
    },
    2: {
      title: 'Одеяло Woolfield Sunrise',
      image: 'img-product-cart-02@2x.jpg',
      modification: [{ title: 'Размер',  Image: Product01 }] ,
      price: 2000,
      id: 2,
      discount: 1000,
      minDiscount: null,
  },
}

const initialState = {
    data: {
        balance: 4700,
        basketItems: [
            { id: 1, count: 2 },
            { id: 2, count: 1 }
        ],
        listItems,
    },
}

function changeData(state = initialState.data, action) {
    switch (action.type) {
      case 'changeData':
            let newbasketItems = state.basketItems.map(item =>{
              if (item.id === action.id) {
                return { ...item, ...action.data}
              }

              return item;
            }  )

        return { ...state, basketItems: newbasketItems };
    }

    return state;
}

export default combineReducers({
    data: changeData,
})

window.store = initialState

