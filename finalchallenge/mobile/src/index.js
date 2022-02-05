import './config/ReactotronConfig';
import './config/StatusBarConfig';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import App from './App';

const index = () => (
  <Provider store={store}>
    <App />;
  </Provider>
);

export default index;
