import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IconToolbarButton, Tooltip } from 'harmony-theme';
import "harmony-theme/dist/output.css";
import { GoQuestionIcon } from './icons/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ maxHeight: '16px'}}>
        <Tooltip   multiline content={'Ajuda'}>
            <IconToolbarButton variant='Secondary-Small' ><GoQuestionIcon/></IconToolbarButton>
        </Tooltip>
        </div>
      </header>

    </div>
  );
}

export default App;
