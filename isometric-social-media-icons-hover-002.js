

let start = document.querySelector('#li-start')
let classNames = ['fa fa-facebook','fa fa-twitter','fa fa-whatsapp','fa fa-linkedin','fa fa-instagram']
let liNames = ['li-facebook','li-twitter','li-whatsapp','li-linkedin','li-instagram']
// start.after(element)

for(let i = 0; i < 60; i++){
    for(let j = 0; j < 5; j++){
        let element = document.createElement('li')
        element.innerHTML = `
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class="${classNames[j]}"></span>
        </a>
        `
        element.classList.add(liNames[j])
        start.after(element)
    }
}