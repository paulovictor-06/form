const loginButton = document.getElementById('login-btn')
const iconeHeader = document.getElementById('icone-header')
const form = document.getElementById('formulario')
const iconeInput = document.querySelector('.icone-input')


iconeHeader.addEventListener('click', () =>{
    
    if(iconeHeader.classList.contains('fa-moon')) {
        iconeHeader.classList.remove('fa-moon')
        iconeHeader.classList.add('fa-sun')
    } else {
        iconeHeader.classList.add('fa-moon')
    }
    
    form.classList.toggle('active')
    iconeHeader.classList.toggle('active')
    // iconeHeader.innerHTML = sum
    
})

