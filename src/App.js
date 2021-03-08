import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

import Inicio3 from "./Components/Inicio3.js";
import CambiarUsuario from "./Components/CambiarUsuario.js";
import UsuarioCambiado from "./Components/usuarioCambiado.js";

export default function App() {
  return (
    <Router>
      <Fragment>
        {/* <HeaderImg /> */}

        <Route
          path="/"
          exact
          strict
          render={() => {
            return <Inicio3 />;
          }}
        />
        <Route
          path="/formulario"
          exact
          strict
          render={() => {
            return <CambiarUsuario />;
          }}
        />
        <Route
          path="/usuarioCambiado"
          exact
          strict
          render={() => {
            return <UsuarioCambiado />;
          }}
        />
      </Fragment>
    </Router>
  );
}

// ReactDOM.render(<App />, document.querySelector('#app'));

// export default App;
