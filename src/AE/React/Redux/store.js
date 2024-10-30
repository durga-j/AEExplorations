import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import apiReducer from './slice';
import watchFetchDataSaga from './DataFetchSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    data: apiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchDataSaga);
