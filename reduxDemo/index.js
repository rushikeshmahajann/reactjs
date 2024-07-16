const redux = require("redux");
const createStore = redux.legacy_createStore;
const bindActionCreators = redux.bindActionCreators

const cakeOrdered = "cake is ordered";
const cakesRestocked = "Cakes Restocked"
const iceCreamOrdered = "iceCreamOrdered"
const iceCreamRestocked = "iceCreamRestocked"


/* 
This is an Action 
{
    type: cakeOrdered,
    quantity: 1
} */
/* Action Creator is function that returns an action */
function orderCake() {
  return {
    type: cakeOrdered,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: cakesRestocked,
    payload: qty
  }
}
function orderIceCream(qty = 1){
  return{
    type: iceCreamOrdered,
    payload: qty
  }
}
function restockIceCream(qty = 1){
  return{
    type: iceCreamRestocked,
    payload: qty
  }
}

/* ------------------------------- */
/* Reducer is a function that specifies how app's state changes in response to the actions sent to the store 
Syntax (previosState, action) => {newState}*/

/* const initialState = {
  numOfCakes: 10,
  numOfIceCream : 20
}; */
const initialCakeState = {
  numOfCakes: 10
}
const initialIceCreamState = {
  numOfIceCream: 20
}

const CakeReducer = (state = initialCakeState, action) => {
  if (action.type === cakeOrdered) {
    return {
      ...state,
      numOfCakes: state.numOfCakes - 1,
    };
  }
  else if (action.type === cakesRestocked) {
    return {
      ...state,
      numOfCakes: state.numOfCakes + action.payload,
    }
  }
  else {
    return state;
  }

};
const IceCreamReducer = (state = initialIceCreamState, action) => {
  if (action.type === iceCreamOrdered){
    return {
      ...state,
      numOfIceCream: state.numOfIceCream - 1
    }
  }
  else if (action.type === iceCreamRestocked){
    return {
      ...state,
      numOfIceCream: state.numOfIceCream + action.payload
    }
  }
  else {
    return state;
  }

};
/* -------------------------------- */
/* Store
one store for entire application 
1.getState() to access state
2.dispatch(action) to update state
3.subscribe(listner) register listners
4.you can unsubscribe the listener by calling the function returned by the subscribe(listner) 
*/

const rootReducer = redux.combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer
})
const store = createStore(rootReducer)

console.log("Initital state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state:", store.getState());
})
/* Ordering cakes */
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

/* Restocking cakes */
store.dispatch(restockCake(3))
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())

store.dispatch(restockIceCream(2))



unsubscribe()

/* 
* We can insert an object directly rather than inserting an action creator function.
* But it has a disadvantage of repeatablity when you are dispatching at multiple places inside your code and there is a value that you want to add or subtract you have to make changes in each one of those objects.

store.dispatch({
    type: cakeOrdered,
    quantity: 1,
})
*/


