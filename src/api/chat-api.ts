let subscribers = {
    'messagesReceived': [] as MessageReceivedSubscriberType[],
    'statusChanged': [] as StatusChangedSubscriberType []
}

let ws: WebSocket

const statusNotify = (status: boolean) => {
    subscribers['statusChanged'].forEach(s => s(status))
}

const closeHandler = () => {
    console.log('closed')
    statusNotify(false)
    setTimeout(createChannel, 3000);
};

const openHandler = () => {
    statusNotify(true)
};
const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers['messagesReceived'].forEach(s => s(newMessages))

};

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
}

function createChannel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    statusNotify(false)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers['messagesReceived'] = []
        subscribers['statusChanged'] = []
        cleanUp()
        ws?.close()
    },
    subscribe(event: EventsNames, callback: CallbacksType) {
        // @ts-ignore
        subscribers[event].push(callback)
    },
    unsubscribe(event: EventsNames, callback: CallbacksType) {
        // @ts-ignore
        subscribers[event] = subscribers[event].filter(s => s !== callback)
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
    userMessage?: boolean
}

type MessageReceivedSubscriberType = (messages: ChatMessageType[]) => void
type StatusChangedSubscriberType = (isReady: boolean) => void

type CallbacksType = MessageReceivedSubscriberType | StatusChangedSubscriberType

type EventsNames = 'messagesReceived' | 'statusChanged'
