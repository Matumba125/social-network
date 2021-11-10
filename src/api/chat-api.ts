let subscribers = [] as Array<SubscriberType>

let ws: WebSocket

const closeHandler = () => {
    setTimeout(createChannel, 3000)
};

const onOpenHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages))
    const elem = document.getElementById('data');
    setTimeout(() => {
        if (elem) {
            elem.scrollTop = elem.scrollHeight;
        }
    }, 5)
};

function createChannel() {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws?.addEventListener('close', closeHandler)
    ws.addEventListener('message', onOpenHandler)
}

export const chatAPI = {
    start(){
        createChannel()
    },
    stop(){
        subscribers = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', onOpenHandler)
        ws?.close()
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    sendMessage(message: string) {
        ws.send(message)
    }
}


export type ChatMessageType = {
    message: string
    photo: string
    userId: string
    userName: string
    first?: boolean
    last?: boolean
    unique?: boolean
}

type SubscriberType = (messages: ChatMessageType[]) => void
