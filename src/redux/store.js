import { configureStore } from '@reduxjs/toolkit';
import { myItems } from './myItems/slice';
import { myFilter } from './filter/slice';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['items'],
// };

// const persistedReducer = persistReducer(persistConfig, myItems.reducer);

export const store = configureStore({
  reducer: {
    items: myItems.reducer,
    filter: myFilter.reducer,
  },
});

// export const persistor = persistStore(store);
