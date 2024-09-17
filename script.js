let btn = document.getElementById('btn')
let modal = document.getElementById('modal')
let close = document.getElementById('close')
let header = document.getElementById('header')



btn.addEventListener('click', function () {
    modal.style.top = '55%'

    setTimeout(function(){
    modal.style.top = '50%'
    },900);
})

close.addEventListener('click', function () {
    modal.style.top = '55%'

    setTimeout(function(){
        modal.style.top = '-50%'
        },700);
})
