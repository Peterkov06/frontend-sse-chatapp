import React, { useState } from 'react'

const SendForm = () => {
  const [message, setMessage] = useState<string>("")
  return (
    <section className={''}>
        <form action="">
            <label htmlFor="usernameField">Username: </label>
            <input type="text" name="msgField" id="msgField" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="button" value="Login" onClick={logIn} />
        </form>
    </section>
  )
}

export default SendForm