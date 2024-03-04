import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from 'commonStyle/GlobalStyles';

import Loader from 'components/Loader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </>
);
