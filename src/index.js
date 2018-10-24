import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import _store from './stores';

import 'antd/dist/antd.less';
import './index.less';
import "cesium/Source/Widgets/widgets.css";

import App from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';

const store = _store();

render(
      <Provider store={store}>
              <App/>
      </Provider>,
      document.getElementById('root')
);
registerServiceWorker();
