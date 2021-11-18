const wsocketServer = require('ws').Server
let clientsPool = []

function addToClientsPool(clientData, ws) {
    clientsPool.push({ ...clientData, ws})
}

function informOtherClient(clientData) {
    clientsPool.forEach(client => {
        client.ws.send(JSON.stringify({
            method: 'message',
            msg: `${clientData.id} is coming...`
        }))
    })
}

function updateFrontEndPool(method) {
    clientsPool.forEach(client => {
        client.ws.send(JSON.stringify({
            ids: clientsPool.map(c => c.id),
            method
        }))
    })
}

function removeClient(client) {
    clientsPool = clientsPool.filter(cp => cp.id != client.id)
}

export function init() {
    const wss = new wsocketServer({ port: 30001 })
    // 當 WebSocket 從外部連結時執行
    wss.on('connection', ws => {
        console.log('client connected')
        
        // 對 message 設定監聽, 接收從client發送的資料
        ws.on('message', (data) => {
            let d = JSON.parse(data)
            if (d.method == 'connect') {
                informOtherClient(d)
                addToClientsPool(d, ws)
                updateFrontEndPool(d.method)
            } else if (d.method == 'disconnect') {
                removeClient(d)
                updateFrontEndPool(d.method)
            }
        })

        // 當 Websocket 的連線關閉時執行
        ws.on('close', () => {
            console.log('close connected')
        })
    })
}
