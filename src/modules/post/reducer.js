const entityInitialState = { isLiked: false, rate: 0 };
const initialState = [entityInitialState, entityInitialState, entityInitialState, entityInitialState, entityInitialState];

export const userRate = (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE_SET':
      return state.map((entity, index) => (index === action.payload.id ? { ...entity, isLiked: action.payload.isLiked } : { ...entity }));
    case 'RATE_SET':
      return state.map((entity, index) => (index === action.payload.id ? { ...entity, rate: action.payload.rate } : { ...entity }));
    default:
      return state;
  }
};
