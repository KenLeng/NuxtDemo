<template>
    <div>
        <h2>{{ message }}</h2>
        <button v-for="(id, index) in buttonGroup" :key="index">user: {{ id }}</button>
        <div>
            <button @click="socketConnect">連線</button>
            <button @click="closews">關掉websocket</button>
        </div>
        <div>
            <button @click="sendMsg">傳送</button>
        </div>
        <div>
            {{ msgArea }}
        </div>
    </div>
</template>

<script>

export default {
    name: 'webSocket',
    data() {
        return {
            message: '',
            ws: null,
            buttonGroup: [],
            msgArea: ''
        }
    },
    created() {
        
    },
    async mounted() {
        
    },
    methods: {
        socketConnect() {
            // new 的時候會打open
            this.ws = new WebSocket('ws://localhost:30001')
            this.ws.onopen = () => {
                let obj = {
                    id: new Date().getTime(),
                    data: '123',
                    method: 'connect'
                }
                this.buttonGroup.push(obj.id)
                this.ws.send(JSON.stringify(obj))
            }
            this.ws.onclose = () => {
                this.buttonGroup = []
                console.log('close connection')
            }
            this.ws.onmessage = (event) => {
                let data = JSON.parse(event.data)
                if (data.method == 'connect') {
                    this.buttonGroup = data.ids
                } else if(data.method == 'message'){
                    this.msgArea += data.msg + '\n'
                }
            }
        },
        closews() {
            if (!this.ws) return
            this.ws.close()
        },
        sendMsg() {
            this.ws.send(JSON.stringify({
                method: 'message',
                data: 'just for test'
            }))
        }
    }
}

</script>
