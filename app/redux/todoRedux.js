const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

export const actionCreators = {
  add: (item) => {
    return { type: types.ADD, payload: item};
  },
  remove: (index) => {
    return { type: types.REMOVE, payload: index};
  }
}

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  const {items} = state;

  switch(type) {
    case types.ADD:
        return { ...state, items: [payload, ...items] };
    case types.REMOVE:
      return { ...state, items: items.filter( (todo, i) => i !== payload ) };
    default: {
      return state;
    }
  }
}
