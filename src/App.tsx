import { createContext, useEffect, useState } from 'react'
import type { CtxModel } from './data/LoginContextModel'
import Login from './components/Login';
import { GetMessages, SendTxt } from './services/APIhandler';
import type { MessageType } from './components/Message';
import ChatList from './components/ChatList';
import SendForm from './components/SendForm';

export const ctx = createContext<CtxModel>({prevTexts: [], username:"", sendMessage: () => {}, setUsername: () => {}})

function App() {
  const [userName, setUserName] = useState<string>("");
  const [texts, setTexts] = useState<MessageType[]>([]);

  useEffect(() => {
    GetMessages().then(res => setTexts(res))
  }, []);
  
  //const 

  const sendMesage = (msg: string) =>
  {
    if (msg.length > 1)
    {
      SendTxt({message: msg, username: userName});
    }
  }

  const setUsername = (name: string) =>
  {
    setUserName(name);
  }

  return (
    <>
      <div className='mainCol'>
        <ctx.Provider value={{username: userName, prevTexts: texts, sendMessage: sendMesage, setUsername: setUsername }}>
          <Login></Login>
          <section className={"col"}>
            <ChatList></ChatList>
            <SendForm></SendForm>
          </section>
        </ctx.Provider>
      </div>
    </>
  )
}

export default App
