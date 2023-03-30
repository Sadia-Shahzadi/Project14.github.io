const item = document.querySelector("#item")
const box = document.querySelector ("#box")

item.addEventListener(
    "keyup", 
    function (event){
       if(event.key == "Enter"){
        addDo(this.value)
        this.value = ""
       }
    }
)
const addDo = (item) =>{
    const listitem = document.createElement("li");
    listitem.innerHTML =  `
    ${item}
    <i class="fa fa-times"></i>
    `;
   listitem.addEventListener(
    "click",
    function(){
       this.classList.toggle("done");
    }
   )
   listitem.querySelector("i").addEventListener(
    "click",
    function(){
        listitem.remove()
    }
   )
    box.appendChild(listitem)
}


