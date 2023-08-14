import React, { useState } from 'react'

function Lines({word}) {
    const [status, setStatus] = useState(true);

  return (
    
    <div className="linesContainer" onClick={() => {setStatus(!status)}}>

    {
        status? <><div className='line'></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        <div className={status? "line" : "noLine"}></div>
        
        </>:
                <h3 className='second'>{word}</h3>
    }        
   
    </div>
  )
}

export default Lines