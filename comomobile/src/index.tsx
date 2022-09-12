import * as React from 'react';

import ConfigureStore from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import MainNavigator from './navigation/main-navigator';

export const {store, persistor} = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
