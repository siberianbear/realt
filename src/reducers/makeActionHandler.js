import { isFunction, warning } from '../utils';

export default function makeActionHandler(actionType, reducerHandler, initialState) {
  const isValidReducerHandler = isFunction(reducerHandler);

  if (!isValidReducerHandler) {
    warning(`Expected the reducer for action type: ${actionType} to be a function.`);
  }

  return (state = initialState, action) => (
    actionType === action.type && isValidReducerHandler ?
      reducerHandler(state, action.payload) :
      state
  );
}
