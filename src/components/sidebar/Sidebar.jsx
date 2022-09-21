import React from 'react'


export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebarListItemText">HOME</span>
          </li>
          <li classNam="sidebarListItem">
            <span className="sidebarListItemText">Message</span>
          </li>

          <li classNam="sidebarListItem">
            <span className="sidebarListItemText">Search</span>
          </li>
          <li classNam="sidebarListItem">
            <span className="sidebarListItemText">Notification</span>
          </li>
          <li classNam="sidebarListItem">
            <span className="sidebarListItemText">BookMark</span>
          </li>
          <li classNam="sidebarListItem">
            <span className="sidebarListItemText">Profile</span>
          </li>
          <li classNam="sidebarListItem">
            <span className="sidebarListItemText">Settings</span>
          </li>
        </ul>
        <hr className="sideBarHr" />

      </div>
    </div>
  )
}
