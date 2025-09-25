import type { MessageModel } from "./MessageModel";

export async function SendTxt(data: MessageModel)
{
    try {
        const res = await fetch("https://fos.hu/1ox3", {method:"POST", body: JSON.stringify(data)});
        if (!res.ok)
        {
            //todo
        }
    } catch (error) {
        //todo
    }
}