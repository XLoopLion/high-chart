import React, { useState } from "react";  
import { createPortal } from "react-dom";  

const LabelComponent = ({ tick }) => {  
  const [render, setRender] = useState(true);  

  const handleClick = () => {  
    setRender(prevRender => !prevRender);  
  };  

  return (  
    <div>  
      {createPortal(  
        <div onClick={handleClick}>  
          <div>React</div>  
          {render ? tick.pos : null}  
        </div>,  
        tick.label.element  
      )}  
    </div>  
  );  
};  

export default LabelComponent;
