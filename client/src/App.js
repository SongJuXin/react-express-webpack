import React from 'react';
import { BrowserRouter as Router, Route , Link,} from 'react-router-dom'
import Room from './components/Room/Room'
import Zone from './components/Zone/Zone'

function App() {
  return (
    <div className="App">
        <Router>
            <Link to="/room">room</Link>
            <Link to="/zone">zone</Link>
            <div>
                <Route exact path="/room" component={Room} />
                <Route  path="/zone" component={Zone} />
            </div>
        </Router>
    </div>
  );
}

export default App;
