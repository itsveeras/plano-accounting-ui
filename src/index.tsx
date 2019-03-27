import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ClientForm from './components/ClientForm';

ReactDOM.render(
  <div className={" container"}>
  <ClientForm />
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
