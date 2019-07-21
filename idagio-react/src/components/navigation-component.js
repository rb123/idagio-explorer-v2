import React from 'react';
import './navigation-component.css'

const topLevelItems = ['New', 'Browse', 'Mood', 'Recently Played', 'Collection'];


class Navigation extends React.Component {
  
  render(){
    let htmll = topLevelItems.map((x)=><h5>{x}</h5>);
    return <div className="nav-comp">
      {htmll}
    </div>
  }
}

export default Navigation;