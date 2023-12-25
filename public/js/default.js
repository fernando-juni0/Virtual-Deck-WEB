
    
    
document.getElementById('button-discord').addEventListener('click', async()=>{
    let ip = await fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => {return data}).catch(error => {console.error('Erro ao obter o IP:', error);});
    console.log(ip);
    try {
        const response = await fetch('https://192.168.1.101:3000/executar-funcao', {
        method: 'GET' // Pode ser outro método HTTP dependendo da necessidade
        });
        const data = await response.text();
        console.log(data); // Mensagem da resposta do aplicativo desktop
    } catch (error) {
        console.error('Erro:', error);
    }
})


