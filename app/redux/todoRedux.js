const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  REMOVE_COMPLETE: 'REMOVE_COMPLETE',
  TOOGLE_CHECKBOX: 'TOOGLE_CHECKBOX',
}

export const actionCreators = {
  add: (item) => {
    return { type: types.ADD, payload: item };
  },
  remove: (index) => {
    return { type: types.REMOVE, payload: index };
  },
  removeAllCompleted: () => {
    return { type: types.REMOVE_COMPLETE, payload: {} };
  },
  toogleCheckbox: (index) => {
    return { type: types.TOOGLE_CHECKBOX, payload: index };
  },
}

const initialState = {
  items: [ {name: 'hello', isFinished: false}],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  const {items} = state;

  switch(type) {
    case types.ADD:
        return { ...state, items: [ { name: payload, isFinished: false } , ...items] };
    case types.REMOVE:
      let newItems = items.filter( (todo, i) => i != payload );
      return { ...state, items: newItems};
    case types.REMOVE_COMPLETE:
      return { ...state, items: items.filter( (todo) => !todo.isFinished ) };
    case types.TOOGLE_CHECKBOX:
      return { ...state, items: items.map((item, i) => {
          if(i == payload) {
            return {...item, isFinished: !item.isFinished}
          }
          return item;
        })
      };
    default: {
      return state;
    }
  }
}
