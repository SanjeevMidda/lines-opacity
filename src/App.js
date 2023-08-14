import './index.css';
import Lines from './components/Lines';
import { useState } from 'react';

function App() {

  const [status, setStatus] = useState(true);

  return (
    <div className="App">
      {/* <Lines word="hello"/>
      <Lines word="how"/>
      <Lines word="are"/>
      <Lines word="you"/>
      <Lines word="today"/>
      <Lines word="?"/> */}

      <div className="crossOver">
            <div className={status? "square squareTransform" : "square"} onClick={() => {setStatus(!status)}}></div>
            <div className={status? "circle" : "circle circleTransform"} onClick={() => {setStatus(!status)}}></div>
        </div>
    </div>
  );
}

export default App;
