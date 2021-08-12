import React, { useEffect } from 'react'
import RNPaperButtonModule, { Counter } from 'react-native-paper-button'

const App = () => {
  useEffect(() => {
    console.log(RNPaperButtonModule)
  })

  return <Counter />
}

export default App
