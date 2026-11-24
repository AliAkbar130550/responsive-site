const go = document.getElementById('go')

window.addEventListener('scroll' , () => {
    if(window.scrollY > 120){
        go.classList.add('active')
    }else{
        go.classList.remove('active')
    }
})

// res - section

const menu = document.getElementById('menu-bt-top')
const navebar = document.querySelector('.navebar')
const aa = document.querySelectorAll('.navebar a');


menu.addEventListener('click' , ()=>{
    navebar.classList.toggle('show');
    aa.style.display = 'block'
    
})

document.querySelectorAll('.navebar a').forEach((link)=>{
    link.addEventListener('click' , ()=> {
        navebar.classList.remove('show')
    })
})