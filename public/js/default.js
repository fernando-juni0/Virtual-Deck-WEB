document.getElementById('button-discord').addEventListener('click',()=>{
    console.log('discord');
    fetch('http://192.168.0.101:3000/test/discord',{method:'POST'})
})
document.getElementById('button-chrome').addEventListener('click',()=>{
    console.log('chrome');
    fetch('http://192.168.0.101:3000/test/chrome',{method:'POST'})
})