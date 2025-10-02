import React, { useContext } from 'react'
import { ctx } from '../App';
import Message from './Message';

const ChatList = () => {
  const _ctx = useContext(ctx);
  return (
    <section className='col'>
      {_ctx.prevTexts.map(msg => <Message {...msg}></Message>)}
    </section>
  )
}

export default ChatList