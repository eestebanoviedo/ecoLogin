import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import SignInSide from './Componentes/Inicio.js'
import MyForm from './Componentes/Formik.js'

function App() {
  return (
      <MyForm/>
      // <SignInSide/>
  );
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default App;


