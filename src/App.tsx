import { createContext, useState } from 'react'
import type { CtxModel } from './data/LoginContextModel'
import type { MessageModel } from './data/MessageModel'
import Login from './components/Login';

export const ctx = createContext<CtxModel>({prevTexts: [], username:"", sendMessage: () => {}, setUsername: () => {}})

function App() {
  const [userName, setUserName] = useState<string>("");
  const [texts, setTexts] = useState<MessageModel[]>([]);
  //const 

  const sendMesage = (msg: string) =>
  {

  }

  const setUsername = (name: string) =>
  {
    setUserName(name);
  }

  return (
    <>
      <div>
        <ctx.Provider value={{username: userName, prevTexts: texts, sendMessage: sendMesage, setUsername: setUsername }}>
          <Login></Login>
        </ctx.Provider>
      </div>
    </>
  )
}

export default App
