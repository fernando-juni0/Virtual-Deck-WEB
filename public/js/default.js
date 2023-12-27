
    
    
document.getElementById('button-discord').addEventListener('click', async()=>{
    let ip = await fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => {return data.ip}).catch(error => {console.error('Erro ao obter o IP:', error);});
    try {
        const response = await fetch(`https://99c9-177-11-159-231.ngrok-free.app/executar-funcao`, {
            method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
            headers: {
                'ngrok-skip-browser-warning': '1'
            }
        });
        const data = await response.text();
        console.log(data); // Mensagem da resposta do aplicativo desktop
    } catch (error) {
        console.error('Erro:', error);
    }
})


