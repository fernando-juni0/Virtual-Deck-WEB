let linkServer
const match = location.href.match(/\/default\/(.+)/);
const param = match ? match[1] : '';
console.log(param);

if (param.length > 0) {
    fetch(`https://${param}/ping`, {
        method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
        headers: {
            'ngrok-skip-browser-warning': '1'
        }
    }).then(async(res)=>{
        const data = await response.text();
        if (data == 'sucess') {
            successNotify('Você se conectou a um dispositivo!')
            linkServer = param
            document.getElementById('linkServer').value = param
            document.getElementById('config-popup').style.display = 'none'
            history.pushState({}, '', '/default/'+param);
            successNotify('Você se conectou a um dispositivo!')
        }else{
            errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto!")
        }
    }).catch((err)=>{
        errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto!")
    })
    
}


document.getElementById('button-config').addEventListener('click',()=>{
    document.getElementById('config-popup').style.display ='flex'
})
    
document.getElementById('close-config-popup-button').addEventListener('click',()=>{
    document.getElementById('config-popup').style.display ='none'
})


document.getElementById('save-linkServer').addEventListener('click',async()=>{
    let link = document.getElementById('linkServer').value
    if (link.trim().length > 0) {
        try {
            const response = await fetch(`https://${link}/ping`, {
                method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
                headers: {
                    'ngrok-skip-browser-warning': '1'
                }
            });
            const data = await response.text();
            if (data == 'sucess') {
                successNotify('Você se conectou a um dispositivo!')
                linkServer = link
                document.getElementById('config-popup').style.display = 'none'
                history.pushState({}, '', '/default/'+link);
            }else{
                errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto!")
            }
            console.log(data); // Mensagem da resposta do aplicativo desktop
        } catch (error) {
            console.error('Erro:', error);
            errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto!")
        }
    }
})

document.getElementById('button-discord').addEventListener('click', async()=>{
    if (linkServer) {
        try {
            const response = await fetch(`https://${linkServer}/discord`, {
                method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
                headers: {
                    'ngrok-skip-browser-warning': '1'
                }
            });
            const data = await response.text();

            console.log(data); // Mensagem da resposta do aplicativo desktop
        } catch (error) {
            console.error('Erro:', error);
            errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto ou atualize a página!")
        }
    }
})


document.getElementById('button-chrome').addEventListener('click', async()=>{
    if (linkServer) {
        try {
            const response = await fetch(`https://${linkServer}/chrome`, {
                method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
                headers: {
                    'ngrok-skip-browser-warning': '1'
                }
            });
            const data = await response.text();

            console.log(data); // Mensagem da resposta do aplicativo desktop
        } catch (error) {
            console.error('Erro:', error);
            errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto ou atualize a página!")
        }
    }
})


document.getElementById('button-twitch').addEventListener('click', async()=>{
    if (linkServer) {
        try {
            const response = await fetch(`https://${linkServer}/twitch`, {
                method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
                headers: {
                    'ngrok-skip-browser-warning': '1'
                }
            });
            const data = await response.text();

            console.log(data); // Mensagem da resposta do aplicativo desktop
        } catch (error) {
            console.error('Erro:', error);
            errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto ou atualize a página!")
        }
    }
})


document.getElementById('button-spotify').addEventListener('click', async()=>{
    if (linkServer) {
        try {
            const response = await fetch(`https://${linkServer}/spotify`, {
                method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
                headers: {
                    'ngrok-skip-browser-warning': '1'
                }
            });
            const data = await response.text();

            console.log(data); // Mensagem da resposta do aplicativo desktop
        } catch (error) {
            console.error('Erro:', error);
            errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto ou atualize a página!")
        }
    }
})


document.getElementById('button-muted').addEventListener('click', async()=>{
    if (linkServer) {
        try {
            const response = await fetch(`https://${linkServer}/muted`, {
                method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
                headers: {
                    'ngrok-skip-browser-warning': '1'
                },
            });
            const data = await response.text();

            console.log(data); // Mensagem da resposta do aplicativo desktop
        } catch (error) {
            console.error('Erro:', error);
            errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto ou atualize a página!")
        }
    }
})



document.getElementById('button-dim-volume').addEventListener('click', async()=>{
    if (linkServer) {
        try {
            const response = await fetch(`https://${linkServer}/volume/false`, {
                method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
                headers: {
                    'ngrok-skip-browser-warning': '1'
                }
            });
            const data = await response.text();

            console.log(data); // Mensagem da resposta do aplicativo desktop
        } catch (error) {
            console.error('Erro:', error);
            errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto ou atualize a página!")
        }
    }
})


document.getElementById('button-add-volume').addEventListener('click', async()=>{
    if (linkServer) {
        try {
            const response = await fetch(`https://${linkServer}/volume/true`, {
                method: 'GET', // Pode ser outro método HTTP dependendo da necessidade
                headers: {
                    'ngrok-skip-browser-warning': '1'
                }
            });
            const data = await response.text();

            console.log(data); // Mensagem da resposta do aplicativo desktop
        } catch (error) {
            console.error('Erro:', error);
            errorNotify("Erro ao se comunicar com o dispositivo, verifique se o código de acesso está correto ou atualize a página!")
        }
    }
})





