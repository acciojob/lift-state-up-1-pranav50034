import React, { useState } from "react";

const Child = ({ showModal, showModalState }) => {
   function updateState(){
       showModalState(true);
       console.log(showModal);
   }

   return (
      <div className="child">
         <h2>Child Component</h2>
         <button onClick={() => updateState()}>Show Modal</button>
         {
            showModal && 
               <div>
                  <h3>Modal Content</h3>
                  <p>This is the modal content.</p>
               </div>
            
         }
      </div>
   );
};

export default Child;
