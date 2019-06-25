import { combineReducers } from 'redux';

const listItems = {
    1: {
        title: 'Стакан YPSILON BRIO CAPPUCCINO 220мл',
        image: 'img-product-cart-01@2x.jpg',
        modification: [{ title: 'color',  value: 'yellow' }] ,
        price: 3580,
        id: 1,
    },
    2: {
      title: 'Стакан YPSILON BRIO CAPPUCCINO 220мл',
      image: 'img-product-cart-01@2x.jpg',
      modification: [{ title: 'color',  value: 'yellow' }] ,
      price: 3580,
      id: 2,
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
        case 'change':
            return state;
    }

    return state;
}

export default combineReducers({
    data: changeData,
})

window.store = initialState

