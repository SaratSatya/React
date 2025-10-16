import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
 
  return (
    <>
    <h1 className="text-3xl bg-green-500 p-3 rounded-md">Vite with Tailwind</h1>
    <Card username="hitesh"/>
    <Card username="Sarat"/>
    <Card/>
    </>
  )
}

export default App
