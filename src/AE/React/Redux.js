import { createStore } from 'redux';

export default function ReduxImp(){

    // Reducer
    const counterReducer = (state = 0, action) => {
        switch (action.type) {
            case 'INCREMENT':
      return state + 1;
      case 'DECREMENT':
          return state - 1;
          default:
              return state;
            }
        };
        
        // Store
        const store = createStore(counterReducer);
        
        // Dispatching actions
        store.dispatch({ type: 'INCREMENT' }); // Output: 1
        store.dispatch({ type: 'INCREMENT' }); // Output: 2
        store.dispatch({ type: 'DECREMENT' }); // Output: 1
        store.dispatch({ type: 'INCREMENT' }); // Output: 2
        store.dispatch({ type: 'INCREMENT' }); // Output: 3
        
        console.log(store.getState());  

}