import React, { useState, useEffect } from 'react'
import Card from './components/card'
import Themebtn from './components/Themebtn'
import './App.css'
import { Themeprovider } from './contexts/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode("light")
  } 

  const darktheme = () => {
    setThemeMode("dark")
  } 


  // actuall theme work
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')

    document.querySelector('html').classList.add(themeMode) 
  }, [themeMode])


  return (
   <Themeprovider value ={{themeMode, darktheme, lightTheme}}> 
      <div className="flex flex-wrap min-h-screen items-center">
                      <div className="w-full">
                          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            <Themebtn />
                          </div>

                          <div className="w-full max-w-sm mx-auto">
                            <Card /> 
                          </div>
                      </div>
      </div>
   </Themeprovider>

  )
}

export default App
