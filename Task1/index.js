let inputs = document.getElementById("input");
let text = document.querySelector(".text");

function Add(){
 
    if(inputs.value == ""){
        alert("please enter the task");

    }
    else{
        let newElement =document.createElement("ul");
        newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
         text.appendChild(newElement);
         inputs.value="";
         newElement.querySelector("i").addEventListener("click",remove);
         function remove(){
            newElement.remove();
         }
    }
}