import React, { Fragment } from 'react';
import { RestGlobalStyled } from './style';
import { Iconfont } from './common/statics/iconfont/iconfont';
import Header from './common/header'
function App() {
  return (
    <Fragment>
      <RestGlobalStyled />
      <Iconfont />
      <div className="App">
        <Header />
      </div>
    </Fragment>
  );
}

export default App;
