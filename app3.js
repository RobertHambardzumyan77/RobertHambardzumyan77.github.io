let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let div = document.getElementById("div");
let l = document.getElementById("l")

div.style.opacity = 0
function func(){
    l.addEventListener("click" , function () {
        div.style.opacity = 1
        l.style.display = "none"
    let y = 30;
    let z = setInterval(() => {
        h1.style.color = "azure"
        h1.innerText = `Ժամանակ : ${y}`
        y = y - 1        
        if(y == -1){
            clearInterval(z);
            if (x < 20 ) {
                h2.innerText = `կրիա`
            }
            if (x < 50 && x > 20) {
                h2.innerText = `գեպարտ`
            }
            if (x > 50   ) {
                h2.innerText = `մուստանգ`
            }
            h2.style.color = "azure"
            div.style.display = "none"
        }
    }, 1000);
})
}
func()




let x = 0;

function func2(){
    l.addEventListener("click", function(){
    div.addEventListener("click", function(){
        x = x + 1
        h2.innerText = `Միավոր : ${x}`
        h2.style.color = "azure"
        div.style.backgroundColor = `${color}`
        div.style.transition = `margin 0.2s ` ;
})
    })
}
func2()