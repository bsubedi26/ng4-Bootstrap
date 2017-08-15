// /*
//  A basic middleware logger
//  */

function logger(reducer) {
  return function newReducer(state, action) {
    console.log('STATE ', state);
    console.log('ACTION ', action.type);
    console.log('PAYLOAD ', action.payload);
    const nextState = reducer(state, action);
    console.log('NEXT STATE ', nextState);
    return nextState;
  }
}

export default logger;