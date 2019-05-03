import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.scss'
import RegionList from './components/RegionList'

export default class App extends Component {
  render() {
    return (
      <main>
      <Navbar />
      <RegionList />
      </main>
    )
  }
}

