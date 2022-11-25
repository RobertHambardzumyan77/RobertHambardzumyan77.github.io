let x = document.querySelector(".het")
let y = document.querySelector(".araj")
let z = document.querySelector(".bigdiv2")



let arr = [`div1`,`div2`,`div3`]
let i = 0;

x.addEventListener(`click`, function () {
    i++
    if (i > 2) {
        i = 0
    }

    if (i == 0) {
        z.classList.add(`${arr[i]}`)
        z.classList.remove(`div3`)
    }else if (i == 1) {
        z.classList.add(`${arr[i]}`)
        z.classList.remove(`${arr[i-1]}`)
    }else if (i == 2) {
        z.classList.add(`${arr[i]}`)
        z.classList.remove(`${arr[i-1]}`)
    }
})
y.addEventListener(`click`, function () {
    i--
    if (i < 0) {
        i = 2
    }

    if (i == 0) {
        z.classList.add(`${arr[i]}`)
        z.classList.remove(`${arr[i+1]}`)
    }else if (i == 1) {
        z.classList.add(`${arr[i]}`)
        z.classList.remove(`${arr[i+1]}`)
    }else if (i == 2) {
        z.classList.add(`${arr[i]}`)
        z.classList.remove(`div1`)
    }
    
})

 


 