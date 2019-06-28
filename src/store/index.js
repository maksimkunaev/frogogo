import { combineReducers } from 'redux';

const listItems = {
    1: {
        title: 'Стакан YPSILON BRIO CAPPUCCINO 220мл',
        image: 'img-product-cart-01@2x.jpg',
        modification: [{ title: 'Цвет',  image: '/assets/png/icon-color-product-01.png' }] ,
        price: 3580,
        id: 1,
        discount: 2000,
        minDiscount: 2000,
    },
    2: {
        title: 'Одеяло Woolfield Sunrise',
        image: 'img-product-cart-02@2x.jpg',
        modification: [{ title: 'Размер',  image: '/assets/png/product-size-action@2x.png' }] ,
        price: 2000,
        id: 2,
        discount: 1000,
        minDiscount: null,
    },
    3: {
        title: 'Беспроводная колонка Goodyear Bluetooth Speaker',
        image: 'img-product-cart-05@2x.jpg',
        modification: [] ,
        price: 5000,
        id: 3,
        discount: 2500,
        minDiscount: null,
    },
    4: {
        title: 'Очки солнцезащитные антибликовые с поляризацией',
        image: 'img-product-cart-06@2x.jpg',
        modification: [] ,
        price: 5000,
        id: 3,
        discount: 2500,
        minDiscount: null,
    },
}

const initialState = {
    data: {
        balance: 4700,
        useDiscount: 0,
        basketItems: [
            { id: 1, count: 2 },
            { id: 2, count: 1 },
            { id: 3, count: 0 },
            { id: 4, count: 0, status: 'gift' }
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

        case 'emptyTrash':
        return { ...state, basketItems: [] };
    }

    return state;
}

export default combineReducers({
    data: changeData,
})

window.store = initialState

