init()
async function init() {
    let ip = await fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => {return data.ip}).catch(error => {console.error('Erro ao obter o IP:', error);});
    var socket;
    
    document.getElementById('button-discord').addEventListener('click',()=>{
        if (!socket || socket.readyState !== WebSocket.OPEN) {
            socket = new WebSocket(`wss://192.168.0.101:8443`);
        
            socket.onopen = () => {
              console.log('Conexão com WebSocket aberta');
              socket.send('executar-funcao');
            };
        
            socket.onerror = (error) => {
              console.error('Erro na conexão WebSocket:', error);
            };
        
            socket.onmessage = (event) => {
              console.log('Mensagem recebida:', event.data);
            };
        
            socket.onclose = () => {
              console.log('Conexão com WebSocket fechada');
            };
        } else {
            socket.send('executar-funcao');
        }
    })

}

