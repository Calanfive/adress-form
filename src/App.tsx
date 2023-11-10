import { useCallback, useState } from 'react'
import AdressForm from './AdressForm'
import './App.css'

function App() {
  const [address, setAddress] = useState('')

  const handleChangeAddress = (address: string) => {
    setAddress(address)
  }

  return (
    <>
      <div>
        <AdressForm adress={address} onAddressChange={handleChangeAddress} />
      </div>
    </>
  )
}

export default App
