'use strict';
const { createStore } = Redux;

const initialState = {
  hello : 'false'
}

const reducer = (state = initialState, action) => {
 switch (action.type) {
   case 'CHANGE_HELLO':
     return {
       ...state,
       hello : !action.hello
     };
   // other cases
   default:
     return state;
 }
};

const store = createStore(reducer);

const render = () => {
  const text = document.querySelector("#hello");
  let newHello;
  store.getState().hello ? newHello = "Hello world" : newHello = "Hello";
  text.textContent  = newHello;
}

render();

store.subscribe(render);

const btnHello = document.querySelector('#btnHello');

btnHello.addEventListener('click', event => {
   store.dispatch({
     type: 'CHANGE_HELLO',
     hello: store.getState().hello
   })
})
