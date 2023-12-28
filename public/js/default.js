let linkServer
let param = location.pathname.replace('/default/','')
if (param.length > 0) {
    linkServer = param
    document.getElementById('linkServer').value = param
}


document.getElementById('button-config').addEventListener('click',()=>{
    document.getElementById('config-popup').style.display ='flex'
})
    
document.getElementById('close-config-popup-button').addEventListener('click',()=>{
    document.getElementById('config-popup').style.display ='none'
})


document.getElementById('save-linkServer').addEventListener('click',()=>{
    let link = document.getElementById('linkServer').value
    if (link.trim().length > 0) {
        linkServer = link
    }
})

document.getElementById('button-discord').addEventListener('click', async()=>{
    if (linkServer) {
        try {
            const response = await fetch(`https://${linkServer}/executar-funcao`, {
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
    }
})


