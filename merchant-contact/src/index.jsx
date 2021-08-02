import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/sass/index.scss';

import Clients from 'components/Clients';

const App = () => (
  <>
    <h1>Hello World</h1>
    <Clients />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));