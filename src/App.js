import React, { useState } from 'react'
import AuthentiactionEmail from './components/AuthentiactionEmail'
import AuthentiactionPhone from './components/AuthentiactionPhone'

const App = () => {
    const [showOTP,setShowOTP] = useState(false);
  return (
    <>
        {
            showOTP ? <AuthentiactionEmail /> :
            <AuthentiactionPhone />
        }
    </>
  )
}

export default App