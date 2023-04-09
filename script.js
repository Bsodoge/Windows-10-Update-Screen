let percentage = document.getElementById('percentage');
let progress = 0;
setInterval(() => {
    if(progress !== 99){
        progress++
        percentage.innerText = progress;
    }
}, Math.floor(Math.random() * 50000));