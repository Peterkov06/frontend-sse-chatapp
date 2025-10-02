import type { MessageType } from "../components/Message";
import type { MessageModel } from "../data/MessageModel";

export const BASE_URL = "https://4kqq873p-3000.euw.devtunnels.ms/"

export async function GetMessages() 
{
  try {
    const res = await fetch(BASE_URL + "messages");
    const messages: MessageType[] = await res.json();
    return messages;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function SendTxt(data: MessageModel)
{
    try {
      const res = await fetch(BASE_URL + "messages", {method:"POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)});
      const sentMessage: MessageType = await res.json();
      return sentMessage;
    } catch (error) {
        console.log(error)
        return null;;
    }
}