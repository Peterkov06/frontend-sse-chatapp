import React, { useState } from 'react'

const SendForm = () => {
  const [message, setMessage] = useState<string>("")
  return (
    <section className={'sendForm'}>
        <form action="">
            <label htmlFor="usernameField">Message: </label>
            <input type="text" name="msgField" id="msgField" value={message} onChange={(e) => setMessage(e.target.value)} />
            <input type="button" value="Send" onClick={() => {}} />
        </form>
    </section>
  )
}

export default SendForm