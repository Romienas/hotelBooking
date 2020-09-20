import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Admin from './routes/admin'
import AddRoom from './routes/addRoom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path='/admin' exact component={Admin} />
            <Route path='/addroom' exact component={AddRoom} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
