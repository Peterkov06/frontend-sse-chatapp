import type { MessageModel } from "./MessageModel"

export type CtxModel = 
{
    username: string,
    prevTexts: MessageModel[],
    sendMessage: (msg: string) => void,
    setUsername: (name: string) => void
}