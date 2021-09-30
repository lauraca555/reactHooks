import React, { useEffect, useState } from 'react';

function TestHooks() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count » 
  const [count, setCount] = useState(0);
  //useEffect(()=> {alert(`on remet tot a ${count} !`)});
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => {setCount(0); alert("on remet tout à 0")}}>
        0
      </button>
      <button onClick={() => setCount(count -1)}>
        -1
      </button>
    </div>
  );
}

export default TestHooks;