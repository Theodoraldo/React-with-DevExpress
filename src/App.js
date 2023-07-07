import './App.css';
import React from 'react'
import Menu from './components/Menu';
import Clickme from './components/Clickme';
import Chartme from './components/Chartme';
import AutoComplete from './components/AutoComplete';

export default function App() {
  return (
    <>
    <Menu/>
        <Clickme/>
        <br/>
        <Chartme/>
        <br/>
        <AutoComplete/>
    </>
  )
}
