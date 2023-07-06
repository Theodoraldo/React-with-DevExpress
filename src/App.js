import './App.css';
import React from 'react'
import Clickme from './components/Clickme';
import Chartme from './components/Chartme';
import AutoComplete from './components/AutoComplete';

export default function App() {
  return (
    <>
        <Clickme/>
        <br/>
        <Chartme/>
        <br/>
        <AutoComplete/>
    </>
  )
}
