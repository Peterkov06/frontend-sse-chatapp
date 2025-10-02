import React, { useContext, useEffect, useState } from 'react'
import { ctx } from '../App'

const Login = () => {
    const _ctx = useContext(ctx);
    const [name, setName] = useState<string>("")
    const loggedIn = _ctx.username !== "";

    const logIn = () => 
    {
        if (_ctx.username === "")
        {
            _ctx.setUsername(name);
        }
    }

  return (
    <section className={ loggedIn ? 'hidden': 'loginPopUp col'}>
        <h1>Login</h1>
        <form action="">
            <label htmlFor="usernameField">Username: </label>
            <input type="text" name="usernameField" id="usernameField" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="button" value="Login" onClick={logIn} />
        </form>
    </section>
  )
}

export default Login