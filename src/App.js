import React, { Fragment } from 'react';
import { RestGlobalStyled } from './style';
import Header from './common/header'
function App() {
  return (
    <Fragment>
      <RestGlobalStyled />
      <div className="App">
        <Header />
      </div>
    </Fragment>
  );
}

export default App;
