import React, { useContext, useState } from 'react'
import { ctx } from '../App'

const Login = () => {
    const _ctx = useContext(ctx);
    const [name, setName] = useState<string>("")
    const loggedIn = _ctx.username === "";

    const logIn = () => 
    {
        if (name !== "")
        {
            _ctx.setUsername(name);
            console.log(loggedIn)
        }
    }

  return (
    <div className={ loggedIn ? 'loginPopUp' : 'hidden'}>
        <h1>Login</h1>
        <form action="">
            <label htmlFor="usernameField">Username: </label>
            <input type="text" name="usernameField" id="usernameField" onChange={() => setName} />
            <input type="button" value="Login" onClick={logIn} />
        </form>
    </div>
  )
}

export default Login