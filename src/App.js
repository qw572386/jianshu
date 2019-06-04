import React from 'react';
import { RestGlobalStyled } from './style';
import { Iconfont } from './common/statics/iconfont/iconfont';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <RestGlobalStyled />
      <Iconfont />
      <div className="App">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
