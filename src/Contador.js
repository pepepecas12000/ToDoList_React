import React, { useState } from "react";
function Contador(){
    const [count, setcount ] = useState(0);

    return (
        <div>
          <p>{count}</p>
          <button onClick={() => setcount( count + 1 )}>
            Click me
          </button>
        </div>
      );

}
  export default Contador;
