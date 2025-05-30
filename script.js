const btns = document.querySelectorAll(".btns")
const contents = document.querySelectorAll(".content")

function removerTodos(){
    btns.forEach(item=>{
        item.classList.remove("btn-active")
    })
    contents.forEach(item=>{
        item.classList.remove("show")
    })
}

btns.forEach(item=>{
    item.addEventListener("click", (event)=>{
        removerTodos()
        item.classList.add("btn-active")
        let nomeId = event.target.getAttribute("content-id")

        contents.forEach(item=>{
            if(item.id === nomeId){
                item.classList.add("show")
            }
        })
    })
})
