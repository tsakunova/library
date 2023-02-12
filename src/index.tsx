import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'app';
import { store } from 'store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
