let isRec = false
let preAtalho = []

document.getElementById('rec-atalhos').addEventListener('click',()=>{
    isRec = true
    document.addEventListener('keydown', capkey)
    document.getElementById('rec-atalhos').style.display = 'none'
    document.getElementById('save-atalhos').style.display = 'block'
})

document.getElementById('save-atalhos').addEventListener('click',()=>{
    
    isRec = false
    document.removeEventListener('keydown', capkey)
    document.getElementById('rec-atalhos').style.display = 'block'
    document.getElementById('save-atalhos').style.display = 'none'

})

document.getElementById('clear-atalhos').addEventListener('click',()=>{
    preAtalho = []
    document.getElementById('exib-atalho-containner').innerHTML = '<div class="KeyBack" id="modifiers-atalho-content"></div>'
})

document.getElementById('button-create').addEventListener('click',()=>{
    if (preAtalho.length > 0) {
        if (document.getElementById('name-input-short').textContent.trim.length > 0) {
            
        }else{
            errorNotify('Adicione um nome antes de criar o atalho!') 
        }
    }else{
        errorNotify('Adicione alguma tecla antes de criar o atalho!')
    }
})



function capkey(event) {
    event.preventDefault();
    if (isRec == true) {
        if (document.getElementById('modifiers-atalho-content').textContent.trim().length == 0) {
            document.getElementById('modifiers-atalho-content').innerText = event.key
            preAtalho.push(event.key)
            
        }else{
            if (preAtalho.includes(event.key) == false && preAtalho.length < 4) {
                document.getElementById('exib-atalho-containner').innerHTML += `<div class="KeyBack key-atalho-content">${event.key}</div>`
                preAtalho.push(event.key)
            }
        }   
    }
}