let start = document.getElementById("buttonGame")
let p = document.getElementById("gameH1")
let y = document.getElementById("input").value
let z = document.getElementById("buttonGame")
let m = document.getElementById("restart")
let i = 3
start.addEventListener("click" , function () {
    let g = Math.floor(Math.random(1) * 10)
   
    if (g == y) {
        p.innerText = "haxtanak"
        start.style.display = "none"
        document.getElementById("resultH1").style.display = "none"
    }else if(g != y){
        i = i - 1
        if (i == 0) {
            p.innerText = "դու չգուշակեցիր կրկին փորձիր"
            document.getElementById("resultH1").style.display = "none"
            document.getElementById("buttonGame").style.display = "none"
        }else{
            document.getElementById("resultH1").innerText = ` մնաց ${i} փորձ`
        } 
    }
})
m.addEventListener("click" ,function(){
    m.location.reload()
})