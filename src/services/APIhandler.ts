import type { MessageType } from "../components/Message";
import type { MessageModel } from "../data/MessageModel";

export const BASE_URL = import.meta.env.BASE_URL;

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

export function startMessageStream()
{
  const source = new EventSource(BASE_URL + "stream");

  source.onerror = (error) =>
  {
    console.log(error)
  }

  return source;
}