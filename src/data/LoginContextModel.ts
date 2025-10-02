import type { MessageType } from "../components/Message"

export type CtxModel = 
{
    username: string,
    prevTexts: MessageType[],
    sendMessage: (msg: string) => void,
    setUsername: (name: string) => void
}