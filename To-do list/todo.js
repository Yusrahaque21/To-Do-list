const input=document.getElementById("text-input");
const taskcont=document.getElementById("task-container");

function addTask(){
    if(input.value ===''){
        alert("write someting in the add box");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        taskcont.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    save();
}
taskcont.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }

    else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
save();
    }
},false);
function save(){
    localStorage.setItem("data",taskcont.innerHTML);
}
function show(){
    taskcont.innerHTML=localStorage.getItem('data');
}
show();