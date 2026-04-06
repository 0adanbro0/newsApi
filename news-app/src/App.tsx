import { useState, useEffect } from 'react'
import Api from '../api/weather-api'
const api = Api()
console.log(api)

function App() {

  return (
    <>
      <p>{api}</p>
    </>
  )
}

export default App
