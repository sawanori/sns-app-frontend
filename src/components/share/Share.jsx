import React from 'react'


 export const Share = () => {
   return (
     <>
       <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
           <h1>Image</h1>
           <input type="text" className="shareInput" placeholder='what is this'/>
          </div>
          <hr className="shareHr"/>
          <div className="shareButtons">
           <div className="shareOptions">
            <div className="shareOption">
              <h2>Picture</h2> 
             </div>
            <div className="shareOption">
              <h2>GIF</h2> 
            </div>
            <div className="shareOption">
              <h2>FEEL</h2> 
            </div>
            <div className="shareOption">
              <h2>VOTE</h2> 
            </div>
           </div> 
           <button className="shareButton">submit</button>
          </div>
        </div>
       </div>
     </>
   )
 }
