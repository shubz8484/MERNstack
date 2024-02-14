import React, { useState } from "react";

const App =()=>{

let newTime = new Date().toLocaleTimeString();

const[cTime , setCtime] = useState(newTime);

const curtime=()=>{

    newTime = new Date().toLocaleTimeString();
    setCtime(newTime)
}

    return(
<>
<h1> {cTime} </h1>
<button onClick={curtime}>Get time</button>
</>
    );
}
export default App;


