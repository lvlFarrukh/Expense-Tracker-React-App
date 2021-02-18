import React from 'react';
import './App.css';

// Import Components
import { Header } from './components/Header';
import { Currentbalance } from './components/Currentbalance';
import { Expenses } from './components/Expenses';
import { TransectionHistory } from './components/TransectionHistory';
import { AddTransection } from './components/AddTransection';

import { GlobalProvider } from './context/GlobalState'

function App() {
  // const transtion = useContext(GlobalState)

  return (
    <GlobalProvider>
      <div className="main-div">
        <Header />
        <Currentbalance />
        <Expenses />
        <TransectionHistory />
        <AddTransection />
      </div>
    </GlobalProvider>
  );
}

export default App;
