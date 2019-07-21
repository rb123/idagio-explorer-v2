import React from 'react';
import './App.css';
import './components/navigation-component.css'
import Navigation from'./components/navigation-component'
import CentralPanel from './components/CentralPanel';
import Search from './components/Search';
import RightMenu from './components/RightMenu';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <Search></Search>
        <RightMenu></RightMenu>
        <CentralPanel></CentralPanel>
        <Player></Player>
      </header>
    </div>
  );
}

export default App;