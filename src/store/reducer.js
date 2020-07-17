import {
  ADD_USER_ASYNC,
  DELETE_USER_ASYNC,
  GET_USER_ASYNC,
  UPDATE_USER_ASYNC,
} from './action';

const initialState = {
  user: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_ASYNC:
      return {
        ...state,
        user: payload,
      };

    case ADD_USER_ASYNC:
      return {
        ...state,
        user: [...state.user, payload],
      };

    case UPDATE_USER_ASYNC: {
      const data = [...state.user];
      let result = data.map((x) => (x.id === payload.id ? payload : x));
      return {
        ...state,
        user: result,
      };
    }

    case DELETE_USER_ASYNC: {
      console.log(payload, 'payload');
      const data = [...state.user];
      let result = data.filter((x) => x.id !== payload.id && x);
      console.log('result', result);

      return {
        ...state,
        user: result,
      };
    }
    default:
      return state;
  }
};

export default reducer;
