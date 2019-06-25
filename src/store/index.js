import { combineReducers } from 'redux';

const initialState = {
    data: {
        balance: 4700,
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

