init()
async function init() {
    let ip = await fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => {return data.ip}).catch(error => {console.error('Erro ao obter o IP:', error);});
    const socket = new WebSocket(`wss://${ip}:8443`);
    
    document.getElementById('button-discord').addEventListener('click',()=>{
        if (socket.readyState === WebSocket.OPEN) {
            socket.send('executar-funcao');
        } else {
            console.error('Conexão com WebSocket não está aberta.');
        }
    })
    document.getElementById('button-chrome').addEventListener('click',()=>{
        if (socket.readyState === WebSocket.OPEN) {
            socket.send('executar-funcao');
        } else {
            console.error('Conexão com WebSocket não está aberta.');
        }
    })
}

