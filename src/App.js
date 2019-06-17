import React from 'react';
import { RestGlobalStyled } from './style';
import { Iconfont } from './common/statics/iconfont/iconfont';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <RestGlobalStyled />
      <Iconfont />
      <div className="App">
        <Header />
        <BrowserRouter>
          <Route path='/' exact render={() => <div>home</div>}></Route>
          <Route path='/detail' exact render={() => <div>detail</div>}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
