import { useCallback, useState } from 'react'
import './App.css'

function AdressForm(props: {adress: string; onAddressChange: (adress: string) => void}) {
  const [data, setData] = useState('')

const handleChangeForm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onAddressChange(event.target.value)
        console.log(props.adress);
    },
    []
)

  return (
    <>
      <div className="formulaire">
        <input
            type='text'
            placeholder='Saisir votre adresse'
            onChange={handleChangeForm}
            value={props.adress}
        />
      </div>
    </>
  )
}

export default AdressForm