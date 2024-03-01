const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  if (!action || !action.type) {
    // If action is undefined or doesn't have a type, return the current state
    return state;
  }
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload || {};
      return {
        ...state,
        data: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return state;
  }
};

export default todoReducers;
