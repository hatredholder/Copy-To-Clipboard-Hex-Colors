const copyBtns = [...document.getElementsByClassName('copy-btn')]

let previous = null

copyBtns.forEach(btn => btn.addEventListener('click', ()=>{
    const color = btn.getAttribute('data-hex')
    navigator.clipboard.writeText(color)
    btn.textContent = 'Copied!'

    if(previous){
        previous.textContent = 'Click'
    }
    previous = btn
}))