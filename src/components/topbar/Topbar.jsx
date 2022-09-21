import {Search,Chat,Notifications} from '@mui/icons-material'
import React from 'react'
import "./Topbar.css"

export const Topbar = () => {
    return(
        <div className="topbarContainer">
          <div className="topbarLeft">
            <span className="logo">Real SNS</span>
          </div>
          
          <div className="topbarCenter">
           <div className="searchbar">
             <Search className="searchIcon"/>
             <input type="text" className="searchInput" placeholder="what is your search??"/>
           </div> 
          </div>
          <div className="topbarRigth">
           <div className="topbarItemIcons">
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconItem">1</span>
             </div>    

            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconItem">2</span>
             </div>    
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
           </div>
          </div>
        </div>
    )
}
